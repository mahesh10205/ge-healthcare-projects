import { Component, OnInit, Input } from '@angular/core';
import { UrlInfo } from '../../model/url-info';
import { Subscription } from 'rxjs/Subscription';
import { IFrameService } from '../../service/iframe.service';


@Component({
  selector: 'eis-account-manager',
  templateUrl: './eis-account-manager.component.html',
  styleUrls: ['./eis-account-manager.component.css']
})
export class EisAccountManagerComponent implements OnInit {


  urlInfoMap: Map<string, string>;
  constructor(private iframeService: IFrameService) { }

  ngOnInit() {
    this.urlInfoMap = this.iframeService.urlInfoMap;
  }
  ngOnDestroy(): void {


  }

}
