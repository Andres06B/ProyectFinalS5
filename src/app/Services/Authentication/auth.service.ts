import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode, JwtPayload } from 'jwt-decode';

interface MyJwtPayload extends JwtPayload {
  id: number; 
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/login';
  private tokenKey = 'auth_token';

  constructor(private http: HttpClient) {}

  login(email: string, numero_documento: string): any {
    const user = { email, numero_documento };
    return this.http.post<any>(this.apiUrl, user);
  }

  saveToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getDecodedToken(): MyJwtPayload | null {
    const token = localStorage.getItem(this.tokenKey);
    return token ? jwtDecode<MyJwtPayload>(token) : null;
  }

  getReservaId() {
    const decodedToken = this.getDecodedToken();
    return decodedToken ? decodedToken.id : null; 
  }
}
