import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Acompañante, Usuario } from '../../Interfaces/usuario/usuario.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  ApiUrlUser = 'http://localhost:8080/user';
  ApiUrlAcomp = 'http://localhost:8080/acompañante';

  constructor(private http: HttpClient) {}

  obtenerUsuarios(): Observable<Usuario> {
    return this.http.get<Usuario>(this.ApiUrlUser);
  }

  obtenerUsuario(nombre: string, apellido: string): Observable<Usuario> {
    return this.http.get<Usuario>(this.ApiUrlUser + '/' + nombre + '/' + apellido);
  }

  guardarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.ApiUrlUser, usuario);
  }

  guardarAcompañante(acompañante:Acompañante): Observable<Acompañante> {
    return this.http.post<Acompañante>(this.ApiUrlAcomp, acompañante);
  }
}
