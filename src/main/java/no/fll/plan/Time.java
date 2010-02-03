package no.fll.plan;


public class Time {

	private int hour;
	private int min;
	
	public Time(int minutes) {
		hour = minutes / 60;
		min = minutes % 60;
	}

	public Time(String time) {
		String[] s = time.split(":");
		hour = Integer.parseInt(s[0]);
		min = Integer.parseInt(s[1]);
	}

	public int getHour() {
		return hour;
	}

	public int getMin() {
		return min;
	}

	public int getTotalMinutes() {
		return hour * 60 + min;
	}

	public String to_time(int minutes) {
		Time time = new Time(getTotalMinutes() + minutes);
		return time.toString();
	}
	
	@Override
	public String toString() {
		return (hour < 10 ? "0" : "") + hour + ":" + (min < 10 ? "0" : "") + min;
	}
}
