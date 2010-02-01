package no.fll.web;

import org.mortbay.jetty.Connector;
import org.mortbay.jetty.Handler;
import org.mortbay.jetty.Server;
import org.mortbay.jetty.nio.SelectChannelConnector;
import org.mortbay.jetty.webapp.WebAppContext;

public class Main {

	public static void main(String[] args) throws Exception {
		ConfigurationFactory configurationFactory = new ConfigurationFactory(args);
		Configuration configuration = configurationFactory.getConfiguration();
		if (configuration == null) {
			return;
		}
		createServer(configuration).start();
	}

	public static Server createServer(Configuration configuration) {
		Server server = new Server();
		server.addConnector(createConnector(configuration));
		server.setHandler(createWebAppContext(configuration));
		server.setStopAtShutdown(true);
		return server;
	}

	private static Handler createWebAppContext(Configuration configuration) {
		WebAppContext webAppContext = new WebAppContext();
		webAppContext.setContextPath(configuration.getContextPath());
		String webAppRoot = "src/main/webapp";
		webAppContext.setWar(webAppRoot);
		return webAppContext;
	}

	private static Connector createConnector(Configuration configuration) {
		Connector connector = new SelectChannelConnector();
		connector.setPort(configuration.getPort());
		connector.setHost(configuration.getHost());
		return connector;
	}
}
