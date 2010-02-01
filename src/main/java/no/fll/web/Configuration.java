package no.fll.web;


public class Configuration {
	private String host;
	private int port;
	private String contextPath;
	
	public Configuration(String host, int port, String contextPath) {
		super();
		this.host = host;
		this.port = port;
		this.contextPath = contextPath;
	}

	public String getHost() {
		return host;
	}
	
	public void setHost(String host) {
		this.host = host;
	}
	
	public int getPort() {
		return port;
	}
	
	public void setPort(int port) {
		this.port = port;
	}
	
	public String getContextPath() {
		return contextPath;
	}
	
	public void setContextPath(String contextPath) {
		this.contextPath = contextPath;
	}
}
