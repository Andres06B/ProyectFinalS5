import { Component } from '@angular/core';
import { ReservaService } from '../../../Services/Reserva/reserva.service';
import { map } from 'rxjs';
import { Reserva } from '../../../Interfaces/Reserva/reserva.interface';
import { UsuariosService } from '../../../Services/Usuarios/usuarios.service';
import { Acompañante, Usuario } from '../../../Interfaces/usuario/usuario.interface';

@Component({
  selector: 'app-acompanantes',
  templateUrl: './acompanantes.component.html',
  styleUrl: './acompanantes.component.css'
})
export class AcompanantesComponent {
  
  IdReserva!: number;
  IdUsuario!: number;
  reserva!: Reserva;
  acompanantes: Acompañante[] = [];

  constructor(private ReservaService: ReservaService, private usuario: UsuariosService) { }

  ngOnInit() {
    this.IdReserva = Number(sessionStorage.getItem('ReservaID'));
    if (this.IdReserva) {
      this.obtenerReserva();
    }
  }
  selectedCompanion: any = null;

  
  viewCompanionDetails(companion: any) {
    this.selectedCompanion = companion;
  }
  closeCompanionDetails() {
    this.selectedCompanion = null;
  }

  obtenerReserva(){
    this.ReservaService.obtenerReservaPorId(this.IdReserva).subscribe((reserva: Reserva) => {
      this.reserva = reserva;
      this.IdUsuario = reserva.id_usuario;
      this.ObtenerUsuario();
    }); 
  }

  ObtenerUsuario(){
    this.usuario.obtenerUsuarioPorId(this.IdUsuario).subscribe((usuario: Usuario) => {
      this.acompanantes = usuario.acompañantes;
    });
  }

}
