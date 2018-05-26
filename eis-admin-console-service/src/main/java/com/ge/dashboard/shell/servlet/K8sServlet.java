package com.ge.dashboard.shell.servlet;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class K8sServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private static String java2s_url = "http://www.java2s.com/";

	private static String google_url = "https://www.google.com/";

	// https://daveceddia.com/access-control-allow-origin-cors-errors-in-angular/
	private static String ang_url = "https://daveceddia.com";

	private static String STACK_OVER_FLOW_URL = "https://stackoverflow.com/";

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		process(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		process(req, resp);
	}

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
