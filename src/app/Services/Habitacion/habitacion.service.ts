import { Injectable } from '@angular/core';
import { Habitacion } from '../../Interfaces/habitacion/habitacion.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {
  private baseUrl = 'http://localhost:8080/habitacion';

  constructor(private http: HttpClient) { 
  }

  obtenerHabitaciones(): Observable<Habitacion[]> {
    return this.http.get<Habitacion[]>(this.baseUrl);
  }
}
