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
	private String name;

	@Column(name = "DURATION")
	private int duration;

	@Column(name = "TIME")
	private String time;

	public Activity() {}
	
	public Activity(int id, String name, int duration, String time) {
		super();
		this.id = id;
		this.name = name;
		this.duration = duration;
		this.time = time;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}
	
	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	@Override
	public boolean equals(Object obj) {
		if (obj instanceof Activity) {
			Activity activity = (Activity) obj;
			return (this.id == activity.getId() && this.name.equals(activity.getName()) && this.duration == activity.getDuration() && this.time == activity.getTime());
		}
		return super.equals(obj);
	}
}
