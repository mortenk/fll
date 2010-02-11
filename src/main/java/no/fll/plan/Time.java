package no.fll.plan;



public class Time {

	private int hour;
	private int min;
	
	public Time(int hour, int min) {
		super();
		this.hour = hour;
		this.min = min;
	}

	public Time(int minutes) {
		this(minutes / 60, minutes % 60);
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

	public static Time parseTime(String time) {
		String[] s = time.split(":");
		if (s.length != 2) {
			throw new IllegalArgumentException("Time must be in the format hh:mm");
		}
		try {
			int hour = Integer.parseInt(s[0]);
			int min = Integer.parseInt(s[1]);
			return new Time(hour, min);
		}
		catch (NumberFormatException ex) {
			throw new IllegalArgumentException("Time must be in the format hh:mm");
		}
	}

	public static boolean isTime(String time) {
		try {
			parseTime(time);
			return true;
		}
		catch (IllegalArgumentException ex) {
			return false;
		}
	}
}
