package com.nityaay.products.tutorial.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.util.HtmlUtils;

@Controller
public class WebSocketController {
	


	@Autowired
	private Producer producer;

	@MessageMapping("/send/message")
	@SendTo("/chat")
	public String greeting(String message) throws Exception {
		Thread.sleep(1000); // simulated delay
		return ("Hello, " + HtmlUtils.htmlEscape(message) + "!");
	}

	@GetMapping("/sendMsg/{msg}")
	@ResponseBody
	public String sendMsgToQueue(@PathVariable("msg") String msg) {
		producer.sendMsg(msg);
		return "{status:sent}";
	}
}
