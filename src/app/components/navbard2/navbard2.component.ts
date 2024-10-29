import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbard2',
  templateUrl: './navbard2.component.html',
  styleUrl: './navbard2.component.css'
})
export class Navbard2Component {
  userName = 'Carlos Manuel';
  userLastName = 'Pérez';
  userEmail = 'CarlosMperez@example.com';
  userNationality = 'Colombiana';
  userAge = 25;
  profilePicture = 'https://b2472105.smushcdn.com/2472105/wp-content/uploads/2023/01/Perfil-Profesional-_63-819x1024.jpg?lossy=1&strip=1&webp=1';
  showUserProfile = false;
  showConfirmModal = false; 
  loading = false;

  constructor(private router: Router) { }

  
  toggleProfile() {
    this.showUserProfile = !this.showUserProfile;
  }

  hideProfile() {
    this.showUserProfile = false;
  }


  confirmLogout() {
    this.showConfirmModal = true;
  }

  closeConfirmModal() {
    this.showConfirmModal = false;
  }

  
  logout() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.showConfirmModal = false;
      this.router.navigate(['Log-in']);
    }, 2000);
  }


  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profilePicture = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
}
