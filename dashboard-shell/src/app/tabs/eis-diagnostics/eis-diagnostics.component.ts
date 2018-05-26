import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { IFrameService } from '../../service/iframe.service';
import { SecurityContext } from '@angular/core/src/security';

import { environment } from '../../../environments/environment';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'eis-diagnostics',
  templateUrl: './eis-diagnostics.component.html',
  styleUrls: ['./eis-diagnostics.component.css']
})
export class EisDiagnosticsComponent implements OnInit {

  constructor(private iframeService: IFrameService, private sanitizer: DomSanitizer) { }
   
  urlInfoMap: Map<string, string>;

  k8sIFrameContent: string;
  k8sUrl: string = environment.k8sUrl;

  ngOnInit() {

    this.urlInfoMap=this.iframeService.urlInfoMap;
    

  }

  openTitaniumDashboard() {
    window.open(this.urlInfoMap.get('titaniumUrl'))

  }



  ngOnDestroy(): void {

   
  }


}
