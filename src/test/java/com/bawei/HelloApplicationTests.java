package com.bawei;

import com.bawei.entity.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class HelloApplicationTests {

	@Test
	public void contextLoads() {

		User user = new User();
		user.setUserName("AnyCode");
		user.setUserType(20);
		System.err.println(user.toString());

	}

}
