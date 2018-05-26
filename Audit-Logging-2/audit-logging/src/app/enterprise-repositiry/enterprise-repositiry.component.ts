import { Component, OnInit } from '@angular/core';
import { EnterpriseRepoInfo } from '../model/enterprise-repo-info';
import { ProtocolInfo } from '../model/protocol-info';

@Component({
  selector: 'enterprise-repositiry',
  templateUrl: './enterprise-repositiry.component.html',
  styleUrls: ['./enterprise-repositiry.component.css']
})
export class EnterpriseRepositiryComponent implements OnInit {

  enterpriseRepoInfo1 : EnterpriseRepoInfo = new EnterpriseRepoInfo();

  enterpriseRepoInfo2 : EnterpriseRepoInfo = new EnterpriseRepoInfo();

  protocolInfoList:any=[];

  constructor() { }

  ngOnInit() {

    this.protocolInfoList.push(new ProtocolInfo(1001,"TCP - without Syslog"));
  }

  onSave():void{
    console.log("enterpriseRepoInfo1 " + JSON.stringify( this.enterpriseRepoInfo1));
    console.log("enterpriseRepoInfo1 " + JSON.stringify( this.enterpriseRepoInfo2));
  }

}
