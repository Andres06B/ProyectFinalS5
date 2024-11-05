import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reserva } from '../../Interfaces/Reserva/reserva.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  ApiUrlReserva = 'http://localhost:8080/reserva';

  constructor(private http: HttpClient) { }

  crearReserva(reserva: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(this.ApiUrlReserva, reserva);
  }

  obtenerReserva(idUsuario: number, fechaReserva: Date): Observable<Reserva> {
    return this.http.get<Reserva>(this.ApiUrlReserva + '/' + idUsuario + '/' + fechaReserva);
  }
}
