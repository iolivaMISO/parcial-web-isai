import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

@NgModule({
  imports: [
    CommonModule

  ],
  declarations: [VehicleListComponent],
  exports:[VehicleListComponent],

})
export class VehicleModule { }
