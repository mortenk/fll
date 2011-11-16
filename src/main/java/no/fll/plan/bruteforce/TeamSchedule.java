package no.fll.plan.bruteforce;

import no.fll.team.Team;

public class TeamSchedule {

	private Team team;
	private int[] minutes;

	public TeamSchedule(Team team, int minutes) {
		this.team = team;
		this.minutes = new int[minutes];
		for (int i = 0; i < this.minutes.length; i++) {
			this.minutes[i] = 0;
		}
	}

	public boolean hasTime(int minute, int len, int slack) {
		if (minute > slack) {
			minute = minute - slack;
			len = len + slack;
		}
		len = len + slack;
		for (int i = minute; i < minute + len; i++) {
			if (!(i < this.minutes.length)) {
				return false;
			}
			if (minutes[i] != 0) {
				return false;
			}
		}
		return true;
	}

	public boolean hasDone(int activity) {
		for (int i = 0; i < this.minutes.length; i++) {
			if (minutes[i] == activity) {
				return true;
			}
		}
		return false;
	}

	public void set(int minute, int len, int activity) {
		assert (minute >= 0);
		assert (minute + len < this.minutes.length);
		for (int i = minute; i < minute + len; i++) {
			assert (minutes[i] == 0);
			minutes[i] = activity;
		}
	}

	public void clear(int minute, int len) {
		assert (minute + len <= this.minutes.length);
		for (int i = minute; i < minute + len; i++) {
			assert (minutes[i] != 0);
			minutes[i] = 0;
		}
	}

	public int getId() {
		return team.getId();
	}

	public int getActivity(int i) {
		return minutes[i];
	}

	public String getName() {
		return team.getName();
	}

	public Team getTeam() {
		return team;
	}

}
