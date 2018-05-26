package com.ge.dashboard.shell.controller;

import java.security.Principal;
import java.util.Collection;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserInfoController {

	// @RequestMapping(value = "/token", method = RequestMethod.GET)
	// @ResponseBody
	// public UserInfo currentUserName(Authentication authentication) {
	// return new UserInfo(authentication.getName());
	// }

	@RequestMapping(value = "/userInfo", method = RequestMethod.GET)
	@ResponseBody
	public UserInfo currentUserName(Principal principal) {
		if (principal != null && principal instanceof UsernamePasswordAuthenticationToken) {
			UserInfo userInfo = new UserInfo(principal.getName());
			Collection<GrantedAuthority> authorities = ((UsernamePasswordAuthenticationToken) principal)
					.getAuthorities();
			for (GrantedAuthority grantedAuthority : authorities) {
				userInfo.getRoles().add(grantedAuthority.getAuthority());
			}

			return userInfo;
		} else {
			return null;
		}
	}
}
