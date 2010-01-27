package no.fll.schedule;

import java.util.ArrayList;
import java.util.List;

public class RandomScheduleFactory implements ScheduleFactory {

	public List<Integer> createTeamList(int teams) {
		return randomize(createLinearTeamList(teams));
	}

	public List<Integer> createLinearTeamList(int teams) {
		List<Integer> teamList = new ArrayList<Integer>();
		for (int i = 0; i < teams; i++)
			teamList.add(i);
		if (teams % 2 != 0)
			teamList.add(0);
		return teamList;
	}

	public static List<Integer> randomize(List<Integer> list) {
		List<Integer> newList = new ArrayList<Integer>();
		while (!list.isEmpty()) {
			int i = getRandomTeam(list.size());
			newList.add(list.get((i)));
			list.remove(i);
		}
		return newList;
	}

	public static int getRandomTeam(int max) {
		return (int) Math.floor(Math.random() * max);
	}
}
