FROM java:8-jre-alpine
ADD target/dashboard-shell-service.jar dashboard-shell-service.jar
EXPOSE 8091
CMD java -DidentityUrl=${identityUrl} -DtitaniumUrl=${titaniumUrl} -Dk8sUrl=${k8sUrl} -DtelemeteryUrl=${telemeteryUrl} -DprometheusUrl=${prometheusUrl} -DgrafanaUrl=${grafanaUrl} -DkibanaUrl=${kibanaUrl} -DdeviceRegistryUrl=${deviceRegistryUrl} -jar dashboard-shell-service.jar
                