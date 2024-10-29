import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  isLoading: boolean = false; 

  constructor(private router: Router) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit(loginForm: any) {
    if (!loginForm.valid) {
     
      return;
    }

    this.isLoading = true; 

    
    setTimeout(() => {
     
      this.router.navigate(['/Main']);
      this.isLoading = false; 
    }, 2000); 
  }
}
