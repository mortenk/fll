package no.fll.web;

import org.mortbay.jetty.Connector;
import org.mortbay.jetty.Handler;
import org.mortbay.jetty.Server;
import org.mortbay.jetty.nio.SelectChannelConnector;
import org.mortbay.jetty.webapp.WebAppContext;

public class Main {

	public static void main(String[] args) throws Exception {
		createServer(8080).start();
	}

	public static Server createServer(int port) {
		Server server = new Server();
		server.addConnector(createConnector(port));
		server.setHandler(createWebAppContext());
		server.setStopAtShutdown(true);
		return server;
	}

	private static Handler createWebAppContext() {
		WebAppContext webAppContext = new WebAppContext();
		webAppContext.setContextPath("/");
		String webAppRoot = "WebContent";
		webAppContext.setWar(webAppRoot);
		return webAppContext;
	}

	private static Connector createConnector(int port) {
		Connector connector = new SelectChannelConnector();
		connector.setPort(port);
		connector.setHost("0.0.0.0");
		return connector;
	}
}
