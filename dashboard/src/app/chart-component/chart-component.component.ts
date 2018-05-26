import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { ChartService } from './chart.service'
import { BarchartData } from './barchart-data';



@Component({
  selector: 'chart-component',
  templateUrl: './chart-component.component.html',
  styleUrls: ['./chart-component.component.css'],
  providers: [ChartService]
})
export class ChartComponentComponent implements OnInit {

  @Input()
  public onSubmitEmitter: EventEmitter<any>;

  @Input()
  public onChartClickEmitter: EventEmitter<any>;

  @Input()
  public pieChartEmitter: EventEmitter<any>;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartLabels: string[] = [];

  public barChartData: any[] = [];

  public showShart: boolean = false;

  constructor(private chartService: ChartService) {

  }

  ngOnInit() {

    this.loadData();
    this.onSubmitEmitter.subscribe(data => {
      this.loadData();
    })
  }

  loadData(): void {
    this.showShart = false;
    this.barChartData = [];
    this.chartService.getData().subscribe(data => {

      this.barChartLabels = data.lables;

      for (let ser of data.series) {
        this.barChartData.push({ data: ser.values, label: ser.name });
      }
      if (data.series.length > 0) {
        this.showShart = true;
      } else {
        this.showShart = false;
      }

    })

  }

  // events
  public chartClicked(e: any): void {
    console.log(e);

    if (e.active[0]._view.label) {
      this.onChartClickEmitter.emit(e.active[0]._view.label);
    }

  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  clear(): void {
    
    this.chartService.clear().subscribe(data => {
      this.loadData();
      this.onChartClickEmitter.emit("empty");
      this.pieChartEmitter.emit("empty");
    })
  }


}
