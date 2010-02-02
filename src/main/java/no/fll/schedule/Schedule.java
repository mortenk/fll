package no.fll.schedule;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "SCHEDULE")
public class Schedule {

	@Id
	@Column(name = "kl")
	private String kl;
	
	@Column(name = "team1")
	private String team1;
	
	@Column(name = "team2")
	private String team2;
	
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
