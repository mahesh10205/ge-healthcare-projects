import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { RedComponentComponent } from "../red-component/red-component.component";

import { GridOptions } from "ag-grid/main";
import { DashboardGridServiceService } from "./dashboard-grid-service.service";

@Component({
  selector: 'app-dashboard-grid-component',
  templateUrl: './dashboard-grid-component.component.html',
  styleUrls: ['./dashboard-grid-component.component.css'],
  providers: [DashboardGridServiceService]
})
export class DashboardGridComponentComponent implements OnInit {

  gridOptions: GridOptions;

  dataColumnDefs: any[];

  statsColumnDefs: any[];
  statsData: any[];

  defaultColDef: any;

  iterationId: string;

  @Input()
  public onChartClickEmitter: EventEmitter<any>;

  public rowBuffer;
  public rowSelection;
  public rowModelType;
  public paginationPageSize;
  public cacheOverflowSize;
  public maxConcurrentDatasourceRequests;
  public infiniteInitialRowCount;
  public maxBlocksInCache;

  public params;


  constructor(private dashboardGridSService: DashboardGridServiceService) {

    this.gridOptions = <GridOptions>{};

    this.rowBuffer = 0;
    this.rowSelection = "multiple";
    this.rowModelType = "infinite";
    this.paginationPageSize = 100;
    this.cacheOverflowSize = 2;
    this.maxConcurrentDatasourceRequests = 2;
    this.infiniteInitialRowCount = 1;
    this.maxBlocksInCache = 2;

  }

  ngOnInit() {

    this.dataColumnDefs = [
      { headerName: "Id", field: "id" },
      // {headerName: "Fisrt Name", field: "fname", cellRendererFramework: RedComponentComponent},
      { headerName: "Fisrt Name", field: "fname" },
      { headerName: "Last Name", field: "lname" },
      { headerName: "Iteration", field: "iteration.name" },
      { headerName: "Request Type", field: "reqType.type" }
    ];

    // a default column definition with properties that get applied to every column
    this.defaultColDef = {
      // set every column width
      width: 120,
    }

    this.onChartClickEmitter.subscribe(data => {
      
      console.log("onChartClickEmitter" + data);
      this.iterationId = data;
      if (this.iterationId) {
        this.loadData(this.iterationId);
      }
    })
  }

  onGridReady(params) {
    this.params = params;
    params.api.sizeColumnsToFit();

  }

  loadData(iterationId: string): void {
    console.log("load data");
    var self = this;
    var dataSource = {
      rowCount: null,
      getRows: function (params) {
        console.log("asking for " + params.startRow + " to " + params.endRow);
        let pageSize = params.endRow - params.startRow;
        self.dashboardGridSService.getEmps(iterationId, params.startRow / pageSize, pageSize).subscribe(
          data => {
            params.successCallback(data.content, data.totalElements);
          });
      }
    };
    this.params.api.setDatasource(dataSource);


  }



}
