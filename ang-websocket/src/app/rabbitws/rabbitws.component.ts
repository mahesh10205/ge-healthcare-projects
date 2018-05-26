import { Component, OnInit } from '@angular/core';

import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-rabbitws',
  templateUrl: './rabbitws.component.html',
  styleUrls: ['./rabbitws.component.css']
})
export class RabbitwsComponent implements OnInit {

  private serverUrl = 'ws://127.0.0.1:25674/ws';
  private stompClient;

  private msg: string;

  private msgList: any[] = [];
 

  ngOnInit() {
  }

  constructor() {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    let ws = new WebSocket(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;

    var on_connect = function() {
      console.log('connected');
      that.stompClient.subscribe("/queue/spring-boot", (message) => {
        if (message.body) {
          // that.msgList = that.msgList.concat([message.body]);
          that.msgList.push("Recieved : "+message.body);
        }
      });
  };
  var on_error =  function() {
      console.log('error');
  };

    this.stompClient.connect("guest", "guest", on_connect, on_error, "/");

  }

}
