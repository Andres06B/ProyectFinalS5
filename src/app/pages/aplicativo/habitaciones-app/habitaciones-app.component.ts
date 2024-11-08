import { Component } from '@angular/core';
import { ReservaService } from '../../../Services/Reserva/reserva.service';
import { Reserva } from '../../../Interfaces/Reserva/reserva.interface';
import { HabitacionService } from '../../../Services/Habitacion/habitacion.service';
import { Habitacion } from '../../../Interfaces/habitacion/habitacion.interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-habitaciones-app',
  templateUrl: './habitaciones-app.component.html',
  styleUrl: './habitaciones-app.component.css'
})
  
  
export class HabitacionesAppComponent {

  idRoom!: number;
  reservaId!: number;
  habitacion!: Habitacion;
  constructor(private reservaService: ReservaService, private habitacionService: HabitacionService) { }

  ngOnInit() {
    this.reservaId = Number(sessionStorage.getItem('ReservaID'));
    if (this.reservaId) {
      this.obtenerReservaParaHabitacion();
    }
  }
  
  habitacionSeleccionada: any = null;
  isModalOpen: boolean = false;

  abrirModal(habitacion: any) {
    this.habitacionSeleccionada = habitacion;
    this.isModalOpen = true;
  }

  cerrarModal() {
    this.isModalOpen = false;
    this.habitacionSeleccionada = null;
  }

  obtenerReservaParaHabitacion(){
    this.reservaService.obtenerReservaPorId(this.reservaId).subscribe((reserva: Reserva) => {
      this.idRoom = reserva.id_habitacion;
      this.obtenerHabtacion();
    });
  }

  obtenerHabtacion() {
    this.habitacionService.obtenerHabitacion(this.idRoom)
      .pipe(
        map((habitacion: any) => ({
          id_habitacion: habitacion.id_habitacion,
          nombre: habitacion.nombre,
          tipo: habitacion.tipo,
          precio: habitacion.precio,
          estado: habitacion.estado
        }))
      )
      .subscribe((habitacion: Habitacion) => {
        this.habitacion = habitacion; 
      });
  }
  
}

