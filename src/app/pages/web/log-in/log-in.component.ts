import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/Authentication/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  showPassword: boolean = false;
  isLoading: boolean = false;

  logInForm: FormGroup;
  reservaId: number | null = null;

  constructor(private router: Router, private authenticationService: AuthService) {
    this.logInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
  }

  redirectToMain(){
    setTimeout(() => {
      this.router.navigate(['/Main']);
      this.isLoading = false;
    }, 2000);
  }
  
  login(){
    if(this.logInForm.valid){
      const email = this.logInForm.value.email;
      const password = this.logInForm.value.password;
      this.authenticationService.login(email, password).subscribe({
        next: (response: any) => {
          // console.log('Respuesta de login:', response);
          const token = response;
          if (token) {
            this.authenticationService.saveToken(token);
            this.reservaId = this.authenticationService.getReservaId();
            if (this.reservaId !== null) sessionStorage.setItem('ReservaID', this.reservaId.toString());
            this.redirectToMain();
          } else {
            console.error('No se recibió un token válido');
          }
        },
        error: (error: any) => {
          console.error('Error en la autenticación:', error);
        }
      });
      
    }
  }
}
