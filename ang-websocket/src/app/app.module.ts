import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RabbitwsComponent } from './rabbitws/rabbitws.component';
import { SpringwsComponent } from './springws/springws.component';


@NgModule({
  declarations: [
    AppComponent,
    RabbitwsComponent,
    SpringwsComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
