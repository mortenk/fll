package no.fll.activity;


public class ActivityService {

	public Activity[] getActivities() {
		return new Activity[]{new Activity(1, "Teori", 15), new Activity(2, "Teknisk", 15), new Activity(3, "Presentasjon", 15)};
	}

	public Activity[] createActivity(Activity[] activities) {
		return getActivities();
	}

	public Activity[] updateActivity(Activity[] activities) {
		return getActivities();
	}

	public Activity[] deleteActivity(Activity[] activities) {
		return getActivities();
	}
}
