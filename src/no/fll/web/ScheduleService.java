package no.fll.web;

public class ScheduleService {

	public Schedule[] createSchedule(String startTime, int teams) {
		return new Schedule[]{new Schedule("09.00", "Lag 1", "Lag 2"), new Schedule("09.06", "Lag 3", "Lag 4")};
	}
}
