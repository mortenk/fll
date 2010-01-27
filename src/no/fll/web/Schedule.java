package no.fll.web;

public class Schedule {
	private String kl;
	private String team1, team2;
	
	public Schedule(String kl, String team1, String team2) {
		super();
		this.kl = kl;
		this.team1 = team1;
		this.team2 = team2;
	}

	public String getKl() {
		return kl;
	}
	
	public void setKl(String kl) {
		this.kl = kl;
	}
	
	public String getTeam1() {
		return team1;
	}
	
	public void setTeam1(String team1) {
		this.team1 = team1;
	}
	
	public String getTeam2() {
		return team2;
	}
	
	public void setTeam2(String team2) {
		this.team2 = team2;
	}
}
