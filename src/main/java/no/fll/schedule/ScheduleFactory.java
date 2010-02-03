package no.fll.schedule;

import java.util.List;

import no.fll.team.Team;

public interface ScheduleFactory {

	public List<Team> createTeamList(List<Team> teams);

}
