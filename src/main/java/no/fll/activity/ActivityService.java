package no.fll.activity;

import java.util.List;

import no.fll.dao.CrudDAO;
import no.fll.web.JsonReaderResponse;

import org.springframework.beans.factory.annotation.Autowired;


public class ActivityService {

	@Autowired
	private CrudDAO dao;
	
	public JsonReaderResponse<Activity> getActivities() {
		return dao.list(Activity.class);
	}

	public JsonReaderResponse<Activity> createActivity(List<Activity> activities) {
		return dao.create(activities);
	}

	public JsonReaderResponse<Activity> updateActivity(List<Activity> oldValues, List<Activity> newValues) {
		return dao.update(oldValues, newValues);
	}

	public JsonReaderResponse<Activity> deleteActivity(List<Activity> activities) {
		return dao.deleteAll(activities);
	}
}
