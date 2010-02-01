package no.fll.activity;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"/fll-dao.xml"})
public class ActivityServiceTest {
	@Test
	public void testContextLoader() {
		
	}
}
