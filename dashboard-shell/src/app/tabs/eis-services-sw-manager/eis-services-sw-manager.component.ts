import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { IFrameService } from '../../service/iframe.service';

@Component({
  selector: 'eis-services-sw-manager',
  templateUrl: './eis-services-sw-manager.component.html',
  styleUrls: ['./eis-services-sw-manager.component.css']
})
export class EisServicesSwManagerComponent implements OnInit {
  
  
  urlInfoMap: Map<string, string>;
  constructor(private iframeService: IFrameService) { }

  ngOnInit() {
   
    this.urlInfoMap=this.iframeService.urlInfoMap;

  }
  ngOnDestroy(): void {

    
  }

}
