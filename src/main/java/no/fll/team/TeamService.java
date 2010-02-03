package no.fll.team;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateTemplate;

import no.fll.web.JsonReaderResponse;

public class TeamService {

	@Autowired
	private HibernateTemplate hibernateTemplate;
	
	public JsonReaderResponse<Team> getTeams() {
		return new JsonReaderResponse(hibernateTemplate.loadAll(Team.class));
	}

	public JsonReaderResponse<Team> createTeam(List<Team> activities) {
		hibernateTemplate.saveOrUpdateAll(activities);
		return new JsonReaderResponse(activities);
	}

	public JsonReaderResponse<Team> updateTeam(List<Team> oldValues, List<Team> newValues) {
		return createTeam(newValues);
	}

	public JsonReaderResponse<Team> deleteTeam(List<Team> activities) {
		hibernateTemplate.deleteAll(activities);
		return new JsonReaderResponse(activities);
	}

}
