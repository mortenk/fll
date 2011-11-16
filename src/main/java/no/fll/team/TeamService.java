package no.fll.team;

import java.util.List;

import no.fll.dao.CrudDAO;
import no.fll.web.JsonReaderResponse;

import org.springframework.beans.factory.annotation.Autowired;

public class TeamService {

	@Autowired
	private CrudDAO dao;

	public JsonReaderResponse<Team> getTeams() {
		return dao.list(Team.class);
	}

	public JsonReaderResponse<Team> createTeam(List<Team> teams) {
		return dao.create(teams);
	}

	public JsonReaderResponse<Team> updateTeam(List<Team> oldValues,
			List<Team> newValues) {
		return dao.update(oldValues, newValues);
	}

	public JsonReaderResponse<Team> deleteTeam(List<Team> teams) {
		return dao.deleteAll(teams);
	}

}
