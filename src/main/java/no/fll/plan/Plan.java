package no.fll.plan;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "PLAN")
public class Plan {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "PLAN_ID")
	private Integer id;

	@Column(name = "TIME")
	private String time;

	@Column(name = "TEAM")
	private String team;

	@Column(name = "ACTIVITY")
	private String activity;

	
	public Plan() { }
	
	public Plan(String time, String team, String activity) {
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

	public String getTeam() {
		return team;
	}

	public void setTeam(String team) {
		this.team = team;
	}

	public String getActivity() {
		return activity;
	}

	public void setActivity(String activity) {
		this.activity = activity;
	}
}
