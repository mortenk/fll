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
		return new JsonReaderResponse(hibernateTemplate.loadAll(Schedule.class));
	}
	
	public JsonReaderResponse<Schedule> createSchedule(List<Schedule> schedules) {
		hibernateTemplate.saveOrUpdateAll(schedules);
		return new JsonReaderResponse(schedules);
	}

	public JsonReaderResponse<Schedule> deleteSchedule(List<Schedule> schedules) {
		hibernateTemplate.deleteAll(schedules);
		return new JsonReaderResponse(schedules);
	}

	public List<Schedule> generateSchedule(String startTime, int increment) {
		List<Team> teams = teamService.getTeams().getObjectsToConvertToRecords();
		List<Team> teamList = scheduleFactory.createTeamList(teams);
		List<Schedule> schedules = new ArrayList<Schedule>();
		TimeIncrementor timeIncrementor = new TimeIncrementor(startTime, increment);
		for (int i=0; i<teamList.size();) {
			schedules.add(new Schedule(timeIncrementor.getNextValue(), getTeamName(teamList.get(i++)), getTeamName(teamList.get(i++))));
		}
		return schedules;
	}

	private String getTeamName(Team team) {
		return team.getName();
	}
}
