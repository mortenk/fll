package no.fll.schedule;

import java.util.ArrayList;
import java.util.List;

import no.fll.dao.CrudDAO;
import no.fll.team.Team;
import no.fll.team.TeamService;
import no.fll.web.JsonReaderResponse;

import org.springframework.beans.factory.annotation.Autowired;

public class ScheduleService {

	@Autowired
	private ScheduleFactory scheduleFactory;
	@Autowired
	private TeamService teamService;
	@Autowired
	private CrudDAO dao;
	
	public JsonReaderResponse<Schedule> getSchedule() {
		return dao.list(Schedule.class);
	}
	
	public JsonReaderResponse<Schedule> createSchedule(List<Schedule> schedules) {
		return dao.create(schedules);
	}

	public JsonReaderResponse<Schedule> updateSchedule(List<Schedule> oldValues, List<Schedule> newValues) {
		return dao.update(oldValues, newValues);
	}

	public JsonReaderResponse<Schedule> deleteSchedule(List<Schedule> schedules) {
		return dao.deleteAll(schedules);
	}

	public List<Schedule> generateSchedule(String startTime, int increment) {
		List<Team> teams = teamService.getTeams().getObjectsToConvertToRecords();
		List<Team> teamList = scheduleFactory.createTeamList(teams);
		List<Schedule> schedules = new ArrayList<Schedule>();
		TimeIncrementor timeIncrementor = new TimeIncrementor(startTime, increment);
		for (int i=0; i<teamList.size();) {
			Team team1 = teamList.get(i++);
			Team team2 = null;
			if (teamList.size() > i)
				team2 = teamList.get(i++);
			schedules.add(new Schedule(timeIncrementor.getNextValue(), team1, team2));
		}
		return schedules;
	}

}
