package no.fll.schedule;

import java.util.ArrayList;
import java.util.List;

import no.fll.team.Team;

public class RandomScheduleFactory implements ScheduleFactory {

	@Override
	public List<Team> createTeamList(List<Team> teams) {
		return randomize(teams);
	}

	private static List<Team> randomize(List<Team> list) {
		List<Team> newList = new ArrayList<Team>();
		while (!list.isEmpty()) {
			int i = getRandomTeam(list.size());
			newList.add(list.get((i)));
			list.remove(i);
		}
		return newList;
	}

	private static int getRandomTeam(int max) {
		return (int) Math.floor(Math.random() * max);
	}

}
