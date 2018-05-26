package com.ge.dashboard.shell.controller;

public class Utils {
	public static final String IDENTITY_URL = "identityUrl";

	public static final String K8S_URL = "k8sUrl";

	public static final String TELEMETERY_URL = "telemeteryUrl";

	public static final String TITANIUM_URL = "titaniumUrl";

	public static final String GRAFANA_URL = "grafanaUrl";

	public static final String KIBANA_URL = "kibanaUrl";

	public static final String DEVICEREGISTRY_URL = "deviceRegistryUrl";

	public static final String PROMETHEUS_URL = "prometheusUrl";
	
	public static final String DICOMDATALISTING_URL = "dicomDataListingUrl";
	

	public static boolean isValidIdentityUrl(String url) {
		if (url == null || url.trim().isEmpty() || url.trim().equals("#")) {
			return false;
		} else {
			return true;
		}
	}
}
