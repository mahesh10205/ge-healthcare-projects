package com.nityaay.products.tutorial.springboot;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Producer {

	@Autowired
	private RabbitTemplate rabbitTemplate;

	public String sendMsg(String msg) {
		if (msg != null) {
			try {
				rabbitTemplate.convertAndSend(RabitMqConfiguration.queueName, msg);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return "Message Sent Failed";
			}
		} else {
			System.out.println("msg = " + msg);
		}
		return "message sent";
	}
}
