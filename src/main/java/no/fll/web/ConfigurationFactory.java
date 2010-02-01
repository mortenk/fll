package no.fll.web;


public class ConfigurationFactory {

	private String[] args;
	
	public ConfigurationFactory(String[] args) {
		this.args = args;
	}

	public Configuration getConfiguration() {
		Configuration configuration = new Configuration("0.0.0.0", 8080, "/");
		
		for (int i=0; i<args.length; i++) {
			if ("-port".equals(args[i])) {
				if (i+1 < args.length) {
					configuration.setPort(Integer.parseInt(args[i+1]));
				} else {
					System.out.println("Default http port is " + configuration.getPort());
					return null;
				}
			}
			else if ("-help".equals(args[i])) {
				System.out.println("Optional parameters:\n\t-port [http port]");
				return null;
			}
		}
		
		return configuration;
	}
}
