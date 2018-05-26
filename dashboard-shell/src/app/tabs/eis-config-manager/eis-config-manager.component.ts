import { Component, OnInit, Input } from '@angular/core';
import { IFrameService } from '../../service/iframe.service';


@Component({
  selector: 'eis-config-manager',
  templateUrl: './eis-config-manager.component.html',
  styleUrls: ['./eis-config-manager.component.css']
})
export class EisConfigManagerComponent implements OnInit {


  urlInfoMap: Map<string, string>;

  constructor(private iframeService: IFrameService) { }

  ngOnInit() {
    this.urlInfoMap = this.iframeService.urlInfoMap;
  }

}
