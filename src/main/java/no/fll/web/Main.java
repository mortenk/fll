package no.fll.web;

import org.mortbay.jetty.Connector;
import org.mortbay.jetty.Handler;
import org.mortbay.jetty.Server;
import org.mortbay.jetty.nio.SelectChannelConnector;
import org.mortbay.jetty.webapp.WebAppContext;

public class Main {

	public static void main(String[] args) throws Exception {
		int port = 8080;
		for (int i=0; i<args.length; i++) {
			if ("-port".equals(args[i])) {
				if (i+1 < args.length) {
					port = Integer.parseInt(args[i+1]);
				} else {
					System.out.println("Default http port is " + port);
					return;
				}
			}
			else if ("-help".equals(args[i])) {
				System.out.println("Optional parameters:\n\t-port [http port]");
				return;
			}
		}
		createServer(port).start();
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
		String webAppRoot = "src/main/webapp";
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
