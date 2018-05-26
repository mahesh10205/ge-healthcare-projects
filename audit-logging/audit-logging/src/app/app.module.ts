import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AdminConsoleFormsMaterialModule } from './admin-console-forms-material-module';
import { AuditMsgSettingsComponent } from './audit-msg-settings/audit-msg-settings.component';
import { EnterpriseRepositiryComponent } from './enterprise-repositiry/enterprise-repositiry.component';


@NgModule({
  declarations: [
    AppComponent,
    AuditMsgSettingsComponent,
    EnterpriseRepositiryComponent
  ],
  imports: [
    BrowserModule,
    AdminConsoleFormsMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
