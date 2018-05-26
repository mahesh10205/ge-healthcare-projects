import { Injectable } from '@angular/core';

import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";

import 'rxjs/Rx';
import { ResponseContentType } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { AuditMsgInfo } from '../model/audit-msg-info';

@Injectable()
export class AuditMsgService {

  BASE_URL = "auditlogconfig";

  constructor(private http: Http) { }

  public getAuditMsgInfo(): Observable<AuditMsgInfo> {

    return this.http.get(this.BASE_URL + "/auditmessageconfig").map(resp => resp.json());
  }

  public saveAuditMsgInfo(auditMsgInfo: AuditMsgInfo): Observable<string> {

    return this.http.post(this.BASE_URL + "/auditmessageconfig",auditMsgInfo).map(resp => resp.text());
  }


}
