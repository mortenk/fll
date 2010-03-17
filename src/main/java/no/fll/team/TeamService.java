package no.fll.team;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateTemplate;

import no.fll.web.JsonReaderResponse;

public class TeamService {

	@Autowired
	private HibernateTemplate hibernateTemplate;
	
	public JsonReaderResponse<Team> getTeams() {
		return new JsonReaderResponse<Team>(hibernateTemplate.loadAll(Team.class));
	}

	public JsonReaderResponse<Team> createTeam(List<Team> activities) {
		try {
			hibernateTemplate.saveOrUpdateAll(activities);
			return new JsonReaderResponse<Team>(activities);
		}
		catch (RuntimeException ex) {
			return new JsonReaderResponse<Team>();
		}
	}

	public JsonReaderResponse<Team> updateTeam(List<Team> oldValues, List<Team> newValues) {
		return createTeam(newValues);
	}

	public JsonReaderResponse<Team> deleteTeam(List<Team> activities) {
		hibernateTemplate.deleteAll(activities);
		return new JsonReaderResponse<Team>(activities);
	}

}
