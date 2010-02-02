package no.fll.plan;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateTemplate;

import no.fll.web.JsonReaderResponse;

public class PlanService {

	@Autowired
	private PlanFactory planFactory;
	@Autowired
	private HibernateTemplate hibernateTemplate;
	
	public JsonReaderResponse<Plan> getPlan() {
		return new JsonReaderResponse(hibernateTemplate.loadAll(Plan.class));
	}
	
	public JsonReaderResponse<Plan> createPlan(List<Plan> plan) {
		hibernateTemplate.saveOrUpdateAll(plan);
		return new JsonReaderResponse(plan);
	}

	public JsonReaderResponse<Plan> updatePlan(List<Plan> plan) {
		return createPlan(plan);
	}

	public JsonReaderResponse<Plan> deletePlan(List<Plan> plan) {
		hibernateTemplate.deleteAll(plan);
		return new JsonReaderResponse(plan);
	}

	public List<Plan> generatePlan(int pitminutes) {
		List<Plan> plan = planFactory.generatePlan();
		return plan;
	}

}
