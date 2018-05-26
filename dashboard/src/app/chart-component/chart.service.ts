import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { BarchartData } from './barchart-data';
import { ReqTypeStats } from './req-type-stats';

@Injectable()
export class ChartService {

  chartServiceUrl = "/dashboard-ui"

  constructor(private http: Http) {

  }

  getData(): Observable<BarchartData> {

    return this.http.get(this.chartServiceUrl + "/barchartData")
      .map(this.extractData.bind(this))
      .catch(this.handleError);
  }

  getReqTypeStats(): Observable<ReqTypeStats[]> {

    return this.http.get(this.chartServiceUrl + "/reqTypeStats")
    .map(this.extractData.bind(this))
    .catch(this.handleError);
  }

  clear(): Observable<any> {
    return this.http.get(this.chartServiceUrl + "/clear")
      .map(this.extractData.bind(this))
      .catch(this.handleError);
  }

  extractData(res: Response): any {
    let body = res.json();
    return body;
  }

  handleError(error: any): any {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
