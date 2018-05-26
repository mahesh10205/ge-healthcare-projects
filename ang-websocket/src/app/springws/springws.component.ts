import { Component, OnInit } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-springws',
  templateUrl: './springws.component.html',
  styleUrls: ['./springws.component.css']
})
export class SpringwsComponent implements OnInit {


  ngOnInit(): void {
    
  }
  // private serverUrl = 'http://localhost:8090/socket';
  // private serverUrl = ' ws://127.0.0.1:25674/ws';
  private serverUrl = '/socket';
  private title = 'WebSockets chat';
  private stompClient;

  private msg: string;

  private msgList: any[] = [];

  constructor() {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function (frame) {
      that.stompClient.subscribe("/chat", (message) => {
        if (message.body) {
          // that.msgList = that.msgList.concat([message.body]);
          that.msgList.push("Recieved : "+message.body);
        }

      });
    });
  }

  sendMessage() {
    this.stompClient.send("/app/send/message", {}, this.msg);
    this.msgList.push("Sent : "+this.msg);
  }

}
