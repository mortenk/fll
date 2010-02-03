package no.fll.plan.mock;

import java.util.ArrayList;
import java.util.List;

import no.fll.plan.Plan;
import no.fll.plan.PlanFactory;


public class PlanFactoryMock implements PlanFactory {

	@Override
	public List<Plan> generatePlan(String startTime, String endTime, int pitTime) {
		List<Plan> plan = new ArrayList<Plan>();
		plan.add(new Plan("09.00","Lag 1","Pit"));
		plan.add(new Plan("09.06","Lag 1","Ring"));
		plan.add(new Plan("09.20","Lag 1","Teori"));
		plan.add(new Plan("10.00","Lag 1","Teknisk"));
		plan.add(new Plan("09.06","Lag 2","Pit"));
		plan.add(new Plan("09.12","Lag 2","Ring"));
		plan.add(new Plan("10.20","Lag 2","Teori"));
		plan.add(new Plan("11.00","Lag 2","Teknisk"));
		return plan;
	}

}
