package no.fll.plan;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import no.fll.activity.Activity;
import no.fll.team.Team;


public class PlanPrintingValueObject {
	private List<Plan> plans; 
	
	public PlanPrintingValueObject(List<Plan> plans) {
		this.plans = plans;
	}
	
	public List<Plan> getPlanByTeamName(String teamName) {
		List<Plan> ret = new ArrayList<Plan>();
		for (Plan plan : plans) {
			if (teamName.equals(plan.getTeam().getName())) {
				ret.add(plan);
			}
		}
		return sortByTime(ret); 
	}

	public List<Plan> getPlanByActivity(String activity) {
		List<Plan> ret = new ArrayList<Plan>();
		for (Plan plan : plans) {
			if (activity.equals(plan.getActivity().getActivity())) {
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

	public List<Team> getSortedTeams() {
		List<Team> ret = new ArrayList<Team>();
		for (Plan plan : plans) {
			if (!ret.contains(plan.getTeam())) {
				ret.add(plan.getTeam());
			}
		}
        Collections.sort(ret, new Comparator<Team>() {

			@Override
			public int compare(Team t1, Team t2) {
				return new Integer(t1.getNumber()).compareTo(t2.getNumber());
			}
        });
        return ret; 
	}
	public List<Activity> getSortedActivities() {
		List<Activity> ret = new ArrayList<Activity>();
		for (Plan plan : plans) {
			if (!ret.contains(plan.getActivity())) {
				ret.add(plan.getActivity());
			}
		}
        return ret; 
	}
}
