package com.nityaay.products.tutorial.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@Component
public class Consumer {
	
	@Autowired
	private SimpMessagingTemplate webSocket;

	public void receiveMessage(String message) {
		System.out.println("Received Msg <" + message + ">");
//		webSocket.convertAndSend("/chat", message);

	}

}