import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { IFrameService } from '../../service/iframe.service';

@Component({
  selector: 'eis-device-manager',
  templateUrl: './eis-device-manager.component.html',
  styleUrls: ['./eis-device-manager.component.css']
})
export class EisDeviceManagerComponent implements OnInit {
  
 
  urlInfoMap: Map<string, string>;
  constructor(private iframeService: IFrameService) { }

  ngOnInit() {
    this.urlInfoMap=this.iframeService.urlInfoMap;
  }
  ngOnDestroy(): void {

   
  }

}
