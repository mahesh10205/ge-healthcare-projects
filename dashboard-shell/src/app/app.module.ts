import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import { routes } from "./app.routes";
import { AppComponent } from './app.component';
import { EisDiagnosticsComponent } from './tabs/eis-diagnostics/eis-diagnostics.component';
import { EisDeviceManagerComponent } from './tabs/eis-device-manager/eis-device-manager.component';
import { DashboardMaterialModule } from './dashboard-material-module';
import { RemoteUiFrontEndComponent } from './tabs/remote-ui-front-end/remote-ui-front-end.component';
import { EisServicesSwManagerComponent } from './tabs/eis-services-sw-manager/eis-services-sw-manager.component';
import { EisConfigManagerComponent } from './tabs/eis-config-manager/eis-config-manager.component';
import { EisAccountManagerComponent } from './tabs/eis-account-manager/eis-account-manager.component';
import { AdminConsoleComponent } from './admin-console/admin-console.component';
import { LoginComponent } from './login/login.component';

import { IFrameService } from './service/iframe.service';
import { SafePipe } from './safe.pipe';
import { CanActivateViaAuthGuard } from './CanActivateViaAuthGuard';
import { EnterpriseRepositiryComponent } from './enterprise-repositiry/enterprise-repositiry.component';
import { AuditMsgSettingsComponent } from './audit-msg-settings/audit-msg-settings.component';
import { AuditLoggingComponent } from './tabs/audit-logging/audit-logging.component';
import { K8sServiceService } from './service/k8s-service.service';




@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    DashboardMaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [AppComponent],
  declarations: [AppComponent, EisDiagnosticsComponent, EisDeviceManagerComponent,
    RemoteUiFrontEndComponent, EisServicesSwManagerComponent, EisConfigManagerComponent,
    EisAccountManagerComponent, AdminConsoleComponent, SafePipe,LoginComponent, EnterpriseRepositiryComponent, AuditMsgSettingsComponent, AuditLoggingComponent],
  bootstrap: [AppComponent],
  providers: [IFrameService,CanActivateViaAuthGuard,K8sServiceService]
})
export class AppModule { }
