package no.fll.plan;

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
@Table(name = "PLAN")
public class Plan {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "PLAN_ID")
	private Integer id;

	@Column(name = "TIME")
	private String time;

	@ManyToOne
    @JoinColumn(name="TEAM_ID", nullable=false)
	private Team team;

	@Column(name = "ACTIVITY")
	private String activity;

	
	public Plan() { }
	
	public Plan(String time, Team team, String activity) {
		super();
		this.time = time;
		this.team = team;
		this.activity = activity;
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

	public Team getTeam() {
		return team;
	}

	public void setTeam(Team team) {
		this.team = team;
	}

	public String getActivity() {
		return activity;
	}

	public void setActivity(String activity) {
		this.activity = activity;
	}
}
