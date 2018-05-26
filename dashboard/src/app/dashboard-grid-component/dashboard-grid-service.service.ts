import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class DashboardGridServiceService {
  dashboardUrl = "/dashboard-ui"

  constructor(private http: Http) { }

  getEmps(iterationId: string, page: number, size: number): Observable<any> {
    return this.http.get(this.dashboardUrl + "/data/" + iterationId + "?page=" + page + "&size=" + size)
      .map(this.extractData.bind(this))
      .catch(this.handleError);
  }
  getStats(): Observable<any> {
    return this.http.get(this.dashboardUrl + "/stats")
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
