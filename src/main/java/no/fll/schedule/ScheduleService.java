package no.fll.schedule;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateTemplate;

import no.fll.team.Team;
import no.fll.team.TeamService;
import no.fll.web.JsonReaderResponse;

public class ScheduleService {

	@Autowired
	private ScheduleFactory scheduleFactory;
	@Autowired
	private TeamService teamService;
	@Autowired
	private HibernateTemplate hibernateTemplate;
	
	public JsonReaderResponse<Schedule> getSchedule() {
		return new JsonReaderResponse<Schedule>(hibernateTemplate.loadAll(Schedule.class));
	}
	
	public JsonReaderResponse<Schedule> createSchedule(List<Schedule> schedules) {
		hibernateTemplate.saveOrUpdateAll(schedules);
		return new JsonReaderResponse<Schedule>(schedules);
	}

	public JsonReaderResponse<Schedule> updateSchedule(List<Schedule> oldValues, List<Schedule> newValues) {
		return createSchedule(newValues);
	}

	public JsonReaderResponse<Schedule> deleteSchedule(List<Schedule> schedules) {
		hibernateTemplate.deleteAll(schedules);
		return new JsonReaderResponse<Schedule>(schedules);
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
