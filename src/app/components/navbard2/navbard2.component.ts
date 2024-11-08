import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaService } from '../../Services/Reserva/reserva.service';
import { UsuariosService } from '../../Services/Usuarios/usuarios.service';

@Component({
  selector: 'app-navbard2',
  templateUrl: './navbard2.component.html',
  styleUrl: './navbard2.component.css'
})
export class Navbard2Component {
  userName = '';
  userLastName = '';
  userEmail = '';
  userNationality = '';
  profilePicture = '';
  showUserProfile = false;
  showConfirmModal = false; 
  loading = false;
  reservaId!: number;
  UsuarioId!: number;

  constructor(private router: Router, private reservaService:ReservaService, private usuarioService: UsuariosService){ }

  ngOnInit() {
    this.reservaId = Number(sessionStorage.getItem('ReservaID'));
    this.buscarReserva();
  }
  
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

  buscarReserva() {
    this.reservaService.obtenerReservaPorId(this.reservaId).subscribe((reserva: any) => {
      this.UsuarioId = reserva.id_usuario;
      this.buscarUsuario();
    });
  }

  buscarUsuario() {
    this.usuarioService.obtenerUsuarioPorId(this.UsuarioId).subscribe((usuario: any) => {
      this.userName = usuario.nombre;
      this.userLastName = usuario.apellido;
      this.userEmail = usuario.email;
      this.userNationality = usuario.pais;
    });
  }



}
