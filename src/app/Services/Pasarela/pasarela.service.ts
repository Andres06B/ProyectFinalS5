import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pasarela } from '../../Interfaces/Pasarela/pasarela.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasarelaService {

  apiUrlPasarela = 'http://localhost:8080/pago';

  constructor(private http: HttpClient) { }

  crearPago(pago: Pasarela): Observable<Pasarela> {
    return this.http.post<Pasarela>(this.apiUrlPasarela, pago);
  }
}
