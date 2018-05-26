package com.ge.dashboard.shell;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class KeystoneAuthenticationProvider implements AuthenticationProvider {

	@Autowired
	private RestTemplate restTemplate;

	@Autowired
	private Environment env;

	ObjectMapper objectMapper = new ObjectMapper();

	private static String AUTH_REQ_FORMAT = "{\"auth\":{\"identity\":{\"methods\":[\"password\"],\"password\":{\"user\":{\"domain\":{\"id\":\"default\"},\"name\":\"{0}\",\"password\":\"{1}\"}}}}}";

	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {

		try {
			String name = authentication.getName();
			String password = authentication.getCredentials().toString();
			ResponseEntity<String> responseEntity = authenticate(name, password);
			if (responseEntity.getStatusCode().is2xxSuccessful()) {

				// use the credentials
				// and authenticate against the third-party system
				HttpHeaders httpHeaders = responseEntity.getHeaders();

				String token = httpHeaders.getFirst("x-subject-token");

				Map map = objectMapper.readValue(responseEntity.getBody(), Map.class);
				Map tokenMap = (Map) map.get("token");
				Collection<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
				if (tokenMap != null) {
					List<Map> rolesList = (List<Map>) tokenMap.get("roles");
					for (Map role : rolesList) {
						SimpleGrantedAuthority simpleGrantedAuthority = new SimpleGrantedAuthority(
								(String) role.get("name"));
						authorities.add(simpleGrantedAuthority);
					}

				}

				return new UsernamePasswordAuthenticationToken(name, token, authorities);
			}
		} catch (URISyntaxException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public boolean supports(Class<?> authentication) {
		return authentication.equals(UsernamePasswordAuthenticationToken.class);
	}

	public ResponseEntity<String> authenticate(String name, String pwd) throws URISyntaxException {

		String reqData = AUTH_REQ_FORMAT.replace("{0}", name).replace("{1}", pwd);

		String identityUrl = env.getProperty("identityUrl");

		RequestEntity request = RequestEntity.post(new URI(identityUrl)).contentType(MediaType.APPLICATION_JSON)
				.accept(MediaType.APPLICATION_JSON).body(reqData);
		ResponseEntity<String> response = restTemplate.exchange(request, String.class);

		return response;

	}
}