import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehicle } from './vehicle';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAllVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.apiUrl);
  }
}
