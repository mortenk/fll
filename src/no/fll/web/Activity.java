package no.fll.web;

public class Activity {

	private int id;
	private String activity;
	private int duration;

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
