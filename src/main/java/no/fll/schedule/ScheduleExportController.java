package no.fll.schedule;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class ScheduleExportController {
	@Autowired
	private ScheduleService scheduleService;
	
    @RequestMapping("/schedule.do")
    public ModelAndView print() {
    	System.out.println("Exporting schedule");
        ModelAndView mav = new ModelAndView();
        mav.setViewName("schedule");
        List<Schedule> schedule = scheduleService.getSchedule().getObjectsToConvertToRecords();
        Collections.sort(schedule, new Comparator<Schedule>() {

			@Override
			public int compare(Schedule o1, Schedule o2) {
				return o1.getTime().compareTo(o2.getTime());
			}
        	
        });
        mav.addObject("schedule", schedule);
        return mav;
    }
}
