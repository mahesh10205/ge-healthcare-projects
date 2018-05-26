package com.ge.dashboard.shell;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.security.web.header.writers.StaticHeadersWriter;

import com.ge.dashboard.shell.controller.Utils;

@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
 
	@Autowired
	private KeystoneAuthenticationProvider authProvider;

	@Autowired
	private Environment env;

	@Autowired
	private RestAuthenticationEntryPoint restAuthenticationEntryPoint;

	@Autowired
	private RequestAwareAuthenticationSuccessHandler authenticationSuccessHandler;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.headers().frameOptions().sameOrigin();
		http.csrf().disable().exceptionHandling().authenticationEntryPoint(restAuthenticationEntryPoint).and()
				.authorizeRequests().antMatchers("/css/**", "/index","/k8s").permitAll()
				.antMatchers("/username", "/dashboardShell/**").authenticated().and().formLogin()
				.successHandler(authenticationSuccessHandler)
				.failureHandler(new SimpleUrlAuthenticationFailureHandler()).and().logout();

	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {

		String url = env.getProperty(Utils.IDENTITY_URL, "#");
		if (Utils.isValidIdentityUrl(url)) {
			System.out.println("using key stone identity service url = " + url);
			auth.authenticationProvider(authProvider);
		} else {
			System.out.println("using in memory aunthenitcation url = " + url);
			auth.inMemoryAuthentication().withUser("admin").password("admin").roles("ADMIN");
			auth.inMemoryAuthentication().withUser("user").password("user").roles("USER");
		}
	}

	@Bean
	public RequestAwareAuthenticationSuccessHandler mySuccessHandler() {
		return new RequestAwareAuthenticationSuccessHandler();
	}

	@Bean
	public SimpleUrlAuthenticationFailureHandler myFailureHandler() {
		return new SimpleUrlAuthenticationFailureHandler();
	}

	protected void configure1(HttpSecurity http) throws Exception {

		// http.authorizeRequests().antMatchers("/css/**",
		// "/index").permitAll().antMatchers("/dashboardShell/**")
		// .authenticated().and().formLogin().loginPage("/login").loginProcessingUrl("/loginSubmit")
		// .failureUrl("/logout");

		// http.authorizeRequests().antMatchers("/css/**", "/index").permitAll()
		// .antMatchers("/username",
		// "/dashboardShell/**").authenticated().and().httpBasic();

		// http.headers().frameOptions().sameOrigin().httpStrictTransportSecurity().disable();
		//
		// http.headers().frameOptions().disable()
		// .addHeaderWriter(new StaticHeadersWriter("X-FRAME-OPTIONS", "ALLOW-FROM
		// localhost:4200"));
		
		  http.headers().frameOptions().sameOrigin().
		  httpStrictTransportSecurity().disable();
		  
		  
		  http.headers().frameOptions().disable() .addHeaderWriter(new
		  StaticHeadersWriter("X-FRAME-OPTIONS", "ALLOW-FROM localhost:4200"));
	}

}
