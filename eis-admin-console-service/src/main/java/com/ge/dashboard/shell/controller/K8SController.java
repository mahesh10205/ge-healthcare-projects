package com.ge.dashboard.shell.controller;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("k8s1")
public class K8SController {

	private static String java2s_url = "http://www.java2s.com/";

	private static String google_url = "https://www.google.com/";

	// https://daveceddia.com/access-control-allow-origin-cors-errors-in-angular/
	private static String ang_url = "https://daveceddia.com";

	private static String STACK_OVER_FLOW_URL = "https://stackoverflow.com/";

	@GetMapping(value= {"/",":[a-zA-Z-]+"})
	// @PostMapping
	public void process(HttpServletRequest request, HttpServletResponse response) {
		try {
			response.setContentType("text/html");
			URL url = new URL(STACK_OVER_FLOW_URL);
			URLConnection urlConnection = url.openConnection();
			urlConnection.setDoOutput(true);

			OutputStream op = urlConnection.getOutputStream();

			InputStream clientIP = request.getInputStream();
			OutputStream clientOP = response.getOutputStream();

			transfer(clientIP, op);

			InputStream ip = urlConnection.getInputStream();
			transfer(ip, clientOP);

		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	private static void transfer(InputStream ip, OutputStream op) {
		int bytes_read;
		final byte[] requestData = new byte[1024];
		try {
			while ((bytes_read = ip.read(requestData)) != -1) {
				op.write(requestData, 0, bytes_read);
				op.flush();
			}
		} catch (IOException e) {
		}
	}
}
