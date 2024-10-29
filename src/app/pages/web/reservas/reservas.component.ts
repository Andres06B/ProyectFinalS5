import { Component } from '@angular/core';
import { Habitacion } from '../../../Interfaces/habitacion/habitacion.interface';
import { HabitacionService } from '../../../Services/Habitacion/habitacion.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { HabSeleccionadaService } from '../../../Services/HabitacionSeleccionada/hab-seleccionada.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent {
  checkin: string = '';
  checkout: string = '';
  adultos: number = 1;
  ninos: number = 0;
  mostrarHabitaciones: boolean = false;
  errorMessage: string = '';
  habitaciones: Habitacion[] = [];
  habitacionSeleccionada: number = 0;

  minDate: string;


  constructor(private service: HabitacionService, private router: Router, private habitacionSeleccionadaService: HabSeleccionadaService) {	
    const today = new Date();
    this.minDate = this.formatDate(today);
  }

  ngOnInit() {
    this.ObternerHabitaciones();
  }

  seleccionarHabitacion(habitacion: Habitacion) {
    this.habitacionSeleccionadaService.setHabitacionSeleccionada(habitacion.id_habitacion);
    this.NavegarFormularioReserva();
  }
  
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  consultarDisponibilidad() {
    this.errorMessage = '';

    
    if (!this.checkin || !this.checkout || this.adultos < 1 || this.ninos < 0) {
      this.errorMessage = 'Por favor, complete todos los campos requeridos.';
      this.mostrarHabitaciones = false;
      return;
    }

    this.mostrarHabitaciones = true;
  }

  ObternerHabitaciones() {
    this.service.obtenerHabitaciones().pipe(
      map((habitaciones: any[]) => habitaciones.map(habitacion => ({
        id_habitacion: habitacion.id_habitacion,
        nombre: habitacion.nombre,
        tipo: habitacion.tipo,
        precio: habitacion.precio,
        estado: habitacion.estado
      })))
    ).subscribe((habitaciones: Habitacion[]) => {
      this.habitaciones = habitaciones;
      console.log(habitaciones);
    });
  }

  NavegarFormularioReserva(){
    this.router.navigate(['/FormularioReservas', this.habitacionSeleccionada])
  }
}
