import { Component, OnInit, EventEmitter } from "@angular/core";
import { RedComponentComponent } from "../red-component/red-component.component";

import { GridOptions } from "ag-grid/main";
import { DashboardService } from "./dashboard-service";

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [DashboardService]
})
export class Dashboard implements OnInit {


    public iterations: number;
    public rows: number
    public status: string;

    public onSubmitEmitter: EventEmitter<any> = new EventEmitter();
    
    public onChartClickEmitter: EventEmitter<any> = new EventEmitter();

    public pieChartEmitter: EventEmitter<any> = new EventEmitter();

    constructor(private dashboardService: DashboardService) {

    }

    ngOnInit() {

    }


    onSubmit(): void {
        console.log("onSubmit");
        this.status = "processing..."
        this.dashboardService.populate(this.iterations, this.rows).subscribe(resp => {

            this.status = ""
            this.onSubmitEmitter.emit("loadGraphData");
            this.pieChartEmitter.emit("load pie data");

        })
    }
}

