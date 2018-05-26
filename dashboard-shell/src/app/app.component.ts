
import { Component, OnInit } from '@angular/core';
import { IFrameService } from './service/iframe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private iframeService: IFrameService) {

  }

  ngOnInit() {


  }
}


