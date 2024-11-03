import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../Interfaces/usuario/usuario.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  ApiUrl = 'http://localhost:8080/user';

  constructor(private http: HttpClient) {}

  obtenerUsuarios(): Observable<Usuario> {
    return this.http.get<Usuario>(this.ApiUrl);
  }

  obtenerUsuario(nombre: string, apellido: string): Observable<Usuario> {
    return this.http.get<Usuario>(this.ApiUrl + '/' + nombre + '/' + apellido);
  }

  guardarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.ApiUrl, usuario);
  }
}
