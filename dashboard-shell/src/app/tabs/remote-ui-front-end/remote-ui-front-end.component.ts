import { Component, OnInit,Input } from '@angular/core';
import { IFrameService } from '../../service/iframe.service';


@Component({
  selector: 'remote-ui-front-end',
  templateUrl: './remote-ui-front-end.component.html',
  styleUrls: ['./remote-ui-front-end.component.css']
})
export class RemoteUiFrontEndComponent implements OnInit {

  constructor(private iframeService: IFrameService) { }

  @Input()
  urlInfoMap: Map<string, string>;

  ngOnInit() {
    this.urlInfoMap=this.iframeService.urlInfoMap;
  }

}
