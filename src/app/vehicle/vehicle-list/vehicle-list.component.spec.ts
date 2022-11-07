/* tslint:disable:no-unused-variable */

import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import {
  async, ComponentFixture, inject, TestBed
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { faker } from '@faker-js/faker';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';
import { VehicleListComponent } from './vehicle-list.component';

describe('Service: Vehicle', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [VehicleListComponent],
      providers: [VehicleService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 3; i++) {
      const vehicle = new Vehicle({
        id: i,
        marca: faker.lorem.sentence(),
        linea: faker.lorem.sentence(),
        referencia: faker.lorem.sentence(),
        modelo: faker.lorem.sentence(),
        kilometraje: faker.datatype.number(),
        color: faker.lorem.sentence(),
        imagen: faker.lorem.sentence(),
      });
      component.vehicles.push(vehicle);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should ...', inject([VehicleService], (service: VehicleService) => {
    expect(service).toBeTruthy();
  }));
  it('should have 3 + header table in td elements', () => {
    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(4);
  });
});
