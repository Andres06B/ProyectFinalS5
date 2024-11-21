import { Component } from '@angular/core';
import { ReservaService } from '../../../Services/Reserva/reserva.service';
import { map } from 'rxjs';
import { Reserva } from '../../../Interfaces/Reserva/reserva.interface';
import { PasarelaService } from '../../../Services/Pasarela/pasarela.service';

@Component({
  selector: 'app-estadia',
  templateUrl: './estadia.component.html',
  styleUrl: './estadia.component.css'
})
export class EstadiaComponent {
  reservaId!: number;
  reserva!: Reserva;
  ngOnInit(){
    this.reservaId = Number(sessionStorage.getItem('ReservaID'));
    if (this.reservaId) {
      this.obtenerReserva();
    }
  }
  constructor(private ReservaService: ReservaService, private PagoService: PasarelaService){}

  isModalOpen = false;
  habitacionSeleccionada: Reserva | null = null;

  abrirModal(habitacion: any) {
    this.habitacionSeleccionada = habitacion;
    this.isModalOpen = true;
  }

  cerrarModal() {
    this.isModalOpen = false;
    this.habitacionSeleccionada = null;
  }

  obtenerReserva(){
    this.ReservaService.obtenerReservaPorId(this.reservaId).pipe(
      map((reserva: any) =>({
        fecha_reserva: reserva.fecha_reserva,
        fecha_entrada: reserva.fecha_entrada,
        fecha_salida: reserva.fecha_salida,
        estado: reserva.estado,
        id_usuario: reserva.id_usuario,
        id_habitacion: reserva.id_habitacion,
        id_reserva: reserva.id_reserva
      }))
    ).subscribe((reserva: Reserva) => {
      this.reserva = reserva;
    }); 
  }

  cancelarReserva(){
    this.PagoService.cancelarPago(this.reservaId).subscribe((res: any) => {
      alert('La reserva ha sido cancelada');
    });
  }

}
