import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { AgGridModule } from "ag-grid-angular/main";
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from "./app.component";
import { Dashboard } from "./dashboard-component/dashboard.component";
import { RedComponentComponent } from "./red-component/red-component.component";
import { ChartComponentComponent } from './chart-component/chart-component.component';
import { DashboardGridComponentComponent } from './dashboard-grid-component/dashboard-grid-component.component';
import { PieChartComponentComponent } from './chart-component/pie-chart-component.component';

@NgModule({
    declarations: [
        AppComponent,
        Dashboard,
        RedComponentComponent,
        ChartComponentComponent,
        PieChartComponentComponent,
        DashboardGridComponentComponent
    ],
    imports: [
        BrowserModule, HttpModule,
        AgGridModule.withComponents(
            [RedComponentComponent]
        ),
        FormsModule,
        ChartsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
