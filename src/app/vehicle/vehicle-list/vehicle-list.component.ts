import { Component, OnInit } from '@angular/core';
import { TotalsVehicles } from '../totals-vehicles';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
})
export class VehicleListComponent implements OnInit {
  totals: Array<TotalsVehicles> = [];
  vehicles: Array<Vehicle> = [];
  constructor(private vehicleService: VehicleService) {}

  getAllVehicles(): void {
    this.vehicleService.getAllVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;
      const totalCars = new Map();
      for (const car of vehicles) {

        if (!totalCars.has(car.marca)) {
          totalCars.set(car.marca, 1);
        } else {
          totalCars.set(car.marca, totalCars.get(car.marca) + 1);
        }
      }

      for(let key of totalCars.keys()) {

        const total  = new TotalsVehicles (key, totalCars.get(key));
        this.totals.push(total)
        console.log(total);

      }
      console.log(this.totals);
    });
  }

  ngOnInit() {
    this.getAllVehicles();
  }
}
