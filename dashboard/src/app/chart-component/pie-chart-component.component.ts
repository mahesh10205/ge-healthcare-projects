import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { ChartService } from './chart.service'
import { BarchartData } from './barchart-data';
import { PieChartData } from './pie-chart-data';

@Component({
    selector: 'pie-chart-component',
    templateUrl: './pie-chart-component.component.html',
    providers: [ChartService]
})
export class PieChartComponentComponent implements OnInit {

    public pieChartData: PieChartData;

    public pieChartType: string = 'doughnut';

    public showShart: boolean = false;

    constructor(private chartService: ChartService) {

    }

    @Input()
    public pieChartEmitter: EventEmitter<any>;

    ngOnInit() {
        this.loadData();
        this.pieChartEmitter.subscribe(data => {
      
            this.loadData();
        })
    }

    loadData(): void {
      

        this.showShart = false;
        this.chartService.getReqTypeStats().subscribe(stats => {

            this.pieChartData = new PieChartData();

            for (let stat of stats) {
                this.pieChartData.labels.push(stat.reqType + "(" + stat.count + " iterations)");
                this.pieChartData.data.push(Math.round(stat.avgDuration));
            }
          
            if (stats.length > 0) {
                this.showShart = true;
            } else {
                this.showShart = false;
            }


        })

    }

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}