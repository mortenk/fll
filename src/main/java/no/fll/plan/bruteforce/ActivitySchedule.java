package no.fll.plan.bruteforce;

import java.util.HashMap;
import java.util.Map;

import no.fll.activity.Activity;
import no.fll.team.Team;


public class ActivitySchedule {
	private Activity activity;
	private Map<Integer, Team> schedule;
	
	
	public ActivitySchedule(Activity activity) {
		this.activity = activity;
		schedule = new HashMap<Integer, Team>();
	}

	public void set(Integer time, Team team) {
		schedule.put(time, team);
	}
	
	public void clear(Integer time, Team team) {
		schedule.remove(time);
	}
	
	public Activity getActivity() {
		return activity;
	}

	public boolean isFree(Integer minute) {
		return !schedule.containsKey(minute);
	}
}
