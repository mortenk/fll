package no.fll.schedule;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "SCHEDULE")
public class Schedule {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "SCHEDULE_ID")
	private Integer id;
	
	@Column(name = "TIME")
	private String time;
	
	@Column(name = "TEAM1")
	private String team1;
	
	@Column(name = "TEAM2")
	private String team2;
	
	public Schedule() {	}

	public Schedule(String time, String team1, String team2) {
		super();
		this.time = time;
		this.team1 = team1;
		this.team2 = team2;
	}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
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
