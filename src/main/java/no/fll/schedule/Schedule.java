package no.fll.schedule;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import no.fll.team.Team;

@Entity
@Table(name = "SCHEDULE")
public class Schedule {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "SCHEDULE_ID")
	private Integer id;
	
	@Column(name = "TIME")
	private String time;
	
	@ManyToOne
    @JoinColumn(name="TEAM1_ID", nullable=true)
	private Team team1;
	
	@ManyToOne
    @JoinColumn(name="TEAM2_ID", nullable=true)
	private Team team2;
	
	public Schedule() {	}

	public Schedule(String time, Team team1, Team team2) {
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

	public Team getTeam1() {
		return team1;
	}
	
	public void setTeam1(Team team1) {
		this.team1 = team1;
	}
	
	public Team getTeam2() {
		return team2;
	}
	
	public void setTeam2(Team team2) {
		this.team2 = team2;
	}
}
