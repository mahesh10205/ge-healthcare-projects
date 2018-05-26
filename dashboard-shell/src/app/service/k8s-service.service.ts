import { Injectable } from '@angular/core';

import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import 'rxjs/Rx';
import { ResponseContentType } from '@angular/http';
import { UrlInfo } from "../model/url-info";
import { UserInfo } from "../model/user-info";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class K8sServiceService {

  constructor(private http: Http) {

  }

  prepareK8sService(): Observable<any> {

    let obs: Observable<any> = new Observable<any>(observer => {

      const csrfTokenUrl = "/dashboardShell/csrfToken";

      const loginUrl = "/dashboardShell/login";

      const statusUrl = "/dashboardShell/status";

      this.http.get(csrfTokenUrl).subscribe(tokenResp => {
        
        const tokenRespData: any = tokenResp.json();
        let loginHeadersObj: Headers = new Headers();
        loginHeadersObj.append("token", tokenRespData.token);


        this.http.post(loginUrl, { 'userId': 'testUser', 'pwd': 'testPwd' }, { headers: loginHeadersObj }).subscribe(loginResp => {

          const loginRespData: any = loginResp.json();

          let statusHeadersObj: Headers = new Headers();
          statusHeadersObj.append("Cookie", loginRespData.jwtToken);

          this.http.get(statusUrl, { headers: statusHeadersObj }).subscribe(statusResp => {
            observer.next(statusResp.json());
          });

        });

      });

    });

    return obs;
  }

}
