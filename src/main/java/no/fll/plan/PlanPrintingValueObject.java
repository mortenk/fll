package no.fll.plan;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;


public class PlanPrintingValueObject {
	private List<Plan> plans; 
	
	public PlanPrintingValueObject(List<Plan> plans) {
		this.plans = plans;
	}
	
	public List<Plan> getPlanByTeamName(String teamName) {
		List<Plan> ret = new ArrayList<Plan>();
		for (Plan plan : plans) {
			if (teamName.equals(plan.getTeam())) {
				ret.add(plan);
			}
		}
		return sortByTime(ret); 
	}

	public List<Plan> getPlanByActivity(String activity) {
		List<Plan> ret = new ArrayList<Plan>();
		for (Plan plan : plans) {
			if (activity.equals(plan.getActivity())) {
				ret.add(plan);
			}
		}
		return sortByTime(ret); 
	}

	private List<Plan> sortByTime(List<Plan> ret) {
		Collections.sort(ret, new Comparator<Plan>() {

			@Override
			public int compare(Plan o1, Plan o2) {
				return o1.getTime().compareTo(o2.getTime());
			}
        	
        });
		return ret;
	}

	public List<String> getSortedTeams() {
		List<String> ret = new ArrayList<String>();
		for (Plan plan : plans) {
			if (!ret.contains(plan.getTeam())) {
				ret.add(plan.getTeam());
			}
		}
        Collections.sort(ret);
        return ret; 
	}
	public List<String> getSortedActivities() {
		List<String> ret = new ArrayList<String>();
		for (Plan plan : plans) {
			if (!ret.contains(plan.getActivity())) {
				ret.add(plan.getActivity());
			}
		}
        Collections.sort(ret);
        return ret; 
	}
}
