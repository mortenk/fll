package no.fll.web;


public class ActivityService {

	public Activity[] getActivities() {
		return new Activity[]{new Activity(1, "Teori", 15), new Activity(2, "Teknisk", 15), new Activity(3, "Presentasjon", 15)};
	}
}
