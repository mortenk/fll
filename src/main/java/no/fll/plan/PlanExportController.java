package no.fll.plan;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class PlanExportController {
	@Autowired
	private PlanService planService;
	
    @RequestMapping("/plan.do")
    public ModelAndView print() {
        ModelAndView mav = new ModelAndView();
        mav.setViewName("plan");
        List<Plan> plan = planService.getPlan().getObjectsToConvertToRecords();
        mav.addObject("plan", new PlanPrintingValueObject(plan));
        mav.addObject("teams", planMapByTeams(plan));
        return mav;
    }

	private Map<String, List<Plan>> planMapByTeams(List<Plan> plan) {
		Map<String, List<Plan>> teams = new HashMap<String, List<Plan>>();
        for (Plan p : plan) {
        	List<Plan> list = teams.get(p.getTeam());
        	if (list == null) {
        		list = new ArrayList<Plan>();
        		teams.put(p.getTeam().getName(), list);
        	}
        	list.add(p);
        }
        for (List<Plan> list : teams.values()) {
            Collections.sort(list, new Comparator<Plan>() {

    			@Override
    			public int compare(Plan o1, Plan o2) {
    				return o1.getTime().compareTo(o2.getTime());
    			}
            	
            });
        }
		return teams;
	}
}
