package com.ge.dashboard.shell;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSession;

import org.apache.http.HttpResponse;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.client.methods.HttpEntityEnclosingRequestBase;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPatch;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.client.methods.HttpRequestBase;
import org.apache.http.config.Registry;
import org.apache.http.config.RegistryBuilder;
import org.apache.http.conn.socket.ConnectionSocketFactory;
import org.apache.http.conn.socket.PlainConnectionSocketFactory;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.apache.http.ssl.SSLContextBuilder;
import org.apache.http.ssl.TrustStrategy;
import org.json.JSONException;

public final class HttpUtils {
	public static String httpGet(String url) throws IOException {

		HttpGet httpGet = new HttpGet(url);
		return execute(httpGet);
	}

	public static String httpPost(String url, String jsonRequest) throws IOException {
		return httpPost(url, jsonRequest, true);
	}

	public static String httpPost(String url, String request, boolean isJson) throws IOException {
		HttpPost postRequest = new HttpPost(url);
		addDataToRequest(postRequest, request, isJson);
		return execute(postRequest);
	}

	private static String execute(HttpRequestBase request) {
		CloseableHttpClient httpClient = getHttpClient(request);
		try {

			return getResponse(httpClient.execute(request));
		} catch (IOException e) {
			throw new RuntimeException(e.getMessage());
		}
	}

	private static CloseableHttpClient getHttpClient(HttpRequestBase request) {
		CloseableHttpClient httpClient = null;
		HostnameVerifier allHostsValid = new HostnameVerifier() {
			public boolean verify(String hostname, SSLSession session) {
				return true;
			}
		};

		HttpClientBuilder httpClientbuilder = HttpClientBuilder.create();

		Registry<ConnectionSocketFactory> socketFactoryRegistry = null;
		try {
			if (request.getURI() != null && "https".equalsIgnoreCase(request.getURI().getScheme())) {
				SSLContext sslContext = new SSLContextBuilder().loadTrustMaterial(null, new TrustStrategy() {
					public boolean isTrusted(X509Certificate[] arg0, String arg1) throws CertificateException {
						return true;
					}
				}).build();

				SSLConnectionSocketFactory sslSocketFactory = new SSLConnectionSocketFactory(sslContext, allHostsValid);
				socketFactoryRegistry = RegistryBuilder.<ConnectionSocketFactory>create()
						.register("https", sslSocketFactory).build();
			} else {

				socketFactoryRegistry = RegistryBuilder.<ConnectionSocketFactory>create()
						.register("http", PlainConnectionSocketFactory.getSocketFactory()).build();
			}

			PoolingHttpClientConnectionManager connMgr = new PoolingHttpClientConnectionManager(socketFactoryRegistry);
			httpClientbuilder.setConnectionManager(connMgr);

			httpClient = httpClientbuilder.build();
		} catch (Exception e) {
			e.getStackTrace();
		}
		return httpClient;
	}

	private static void addDataToRequest(HttpEntityEnclosingRequestBase request, String jsonRequest) {
		addDataToRequest(request, jsonRequest, true);
	}

	private static void addDataToRequest(HttpEntityEnclosingRequestBase request, String jsonRequest, boolean isJson) {
		StringEntity input;
		try {
			input = new StringEntity(jsonRequest);
			if (isJson)
				input.setContentType("application/json");
			else
				input.setContentType("application/x-www-form-urlencoded");
			request.setEntity(input);
		} catch (UnsupportedEncodingException e) {
			throw new RuntimeException(e.getMessage());
		}
	}

	private static String getResponse(HttpResponse response) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(response.getEntity().getContent()));
		StringBuilder sb = new StringBuilder();
		try {
			String output;
			while ((output = br.readLine()) != null) {
				sb.append(output);
			}
			if (response.getStatusLine().getStatusCode() != 200) {
				throw new RuntimeException(sb.toString());
			}
		} finally {
			br.close();
		}
		return sb.toString();
	}

	private static void addHeaders(HttpRequestBase requestMethod, Map<String, String> headerParameters) {

		if (headerParameters != null) {
			Set<String> keys = headerParameters.keySet();
			for (Iterator<String> iterator = keys.iterator(); iterator.hasNext();) {
				String key = (String) iterator.next();
				requestMethod.addHeader(key, headerParameters.get(key));
			}
		}
	}
}
