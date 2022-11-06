import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VehicleModule } from './vehicle/vehicle.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    VehicleModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
