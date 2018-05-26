import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class DashboardService {


    dashboardUrl = "/dashboard-ui"

    constructor(private http: Http) {

    }

 

    populate(iterations: number, rows: number): Observable<any> {
        return this.http.get(this.dashboardUrl + "/populate/" + iterations + "/" + rows)
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