import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { ResponseContentType } from '@angular/http';
import { UrlInfo } from "../model/url-info";
import { UserInfo } from "../model/user-info";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class IFrameService {

    public urlInfoMap: Map<string, string>;

    public userInfo: UserInfo;

    constructor(private http: Http) {

    }

    public getFrameContet(url: string): Observable<any> {
        let headers = new Headers();

        return this.http
            .get(url, {
                "headers": headers,
                responseType: ResponseContentType.Blob,
            })
            .map(response => response.blob());
        // .subscribe(html => myVal = html);
    }

    public getUrlInfos(): Observable<UrlInfo[]> {

        return this.http.get("/dashboardShell/urlInfos").map(resp => resp.json());
    }

    public getUserName(): Observable<UserInfo> {
        return this.http.get("/username").map(resp => resp ? resp.json() : null);
    }



    public loginUsingForm(user: string, pwd: string): Observable<any> {

        let headersObj: Headers = new Headers();

        headersObj.append("Content-Type", "application/x-www-form-urlencoded");
        let credentials: string = "username=" + user + "&" + "password=" + pwd;
        return this.http.post("/login", credentials, { headers: headersObj }).map(resp => {



            return resp;
        }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getUserInfo(): Observable<UserInfo> {
        return this.http.get("/userInfo").map(resp => {
            return resp.json()
        }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    logout(): Observable<any> {

        return this.http.post("/logout", "").map(resp => {
            return resp
        }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    public isAnyRoleExist(roles: string[]): boolean {
        if (this.userInfo.roles) {
            for (let role of roles) {
                if (this.userInfo.roles.indexOf(role) > -1) {
                    return true;
                }
            }

        } else {
            return false;
        }

    }


}
