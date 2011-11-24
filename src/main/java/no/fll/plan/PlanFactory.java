package no.fll.plan;

import java.util.List;

public interface PlanFactory {
	public List<Plan> generatePlan(String startTime, String endTime, int pitTime, int slack);
}
