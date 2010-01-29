package no.fll.activity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ACTIVITY")
public class Activity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ACTIVITY_ID")
	private int id;
	
	@Column(name = "ACTIVITY")
	private String activity;

	@Column(name = "DURATION")
	private int duration;

	public Activity() {}
	
	public Activity(int id, String activity, int duration) {
		super();
		this.id = id;
		this.activity = activity;
		this.duration = duration;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getActivity() {
		return activity;
	}

	public void setActivity(String activity) {
		this.activity = activity;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}
}
