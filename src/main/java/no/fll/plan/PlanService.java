package no.fll.plan;

import java.util.List;

import no.fll.dao.CrudDAO;
import no.fll.web.JsonReaderResponse;

import org.springframework.beans.factory.annotation.Autowired;

public class PlanService {

	@Autowired
	private PlanFactory planFactory;
	@Autowired
	private CrudDAO dao;
	
	public JsonReaderResponse<Plan> getPlan() {
		return dao.list(Plan.class);
	}
	
	public JsonReaderResponse<Plan> createPlan(List<Plan> plan) {
		return dao.create(plan);
	}

	public JsonReaderResponse<Plan> updatePlan(List<Plan> oldPlan, List<Plan> newPlan) {
		return dao.update(oldPlan, newPlan);
	}

	public JsonReaderResponse<Plan> deletePlan(List<Plan> plan) {
		return dao.deleteAll(plan);
	}

	public JsonReaderResponse<Plan> generatePlan(String startTime, String endTime, int pitTime) {
		List<Plan> plan = planFactory.generatePlan(startTime, endTime, pitTime);
		if (plan != null)
			return new JsonReaderResponse<Plan>(plan);
		return new JsonReaderResponse<Plan>();
	}

}
