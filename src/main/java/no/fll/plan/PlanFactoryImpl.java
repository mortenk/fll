package no.fll.plan;

import java.util.ArrayList;
import java.util.List;


public class PlanFactoryImpl implements PlanFactory {

	@Override
	public List<Plan> generatePlan() {
		List<Plan> plan = new ArrayList<Plan>();
		plan.add(new Plan(1, "09.00","Lag 1","Pit"));
		plan.add(new Plan(2, "09.06","Lag 1","Ring"));
		plan.add(new Plan(3, "09.20","Lag 1","Teori"));
		plan.add(new Plan(4, "10.00","Lag 1","Teknisk"));
		plan.add(new Plan(5, "09.06","Lag 2","Pit"));
		plan.add(new Plan(6, "09.12","Lag 2","Ring"));
		plan.add(new Plan(7, "10.20","Lag 2","Teori"));
		plan.add(new Plan(8, "11.00","Lag 2","Teknisk"));
		return plan;
	}

}
