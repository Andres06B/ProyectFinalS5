import { Component } from '@angular/core';

@Component({
  selector: 'app-estadia',
  templateUrl: './estadia.component.html',
  styleUrl: './estadia.component.css'
})
export class EstadiaComponent {
  habitaciones = [
    { fechaEntrada: '2024-10-15', fechaSalida: '2024-10-20', numHabitaciones: 2, ocupacion: 4 },
    { fechaEntrada: '2024-11-01', fechaSalida: '2024-11-05', numHabitaciones: 1, ocupacion: 2 },
    { fechaEntrada: '2024-12-10', fechaSalida: '2024-12-15', numHabitaciones: 3, ocupacion: 6 }
  ];
  isModalOpen = false;
  habitacionSeleccionada: any;

  abrirModal(habitacion: any) {
    this.habitacionSeleccionada = habitacion;
    this.isModalOpen = true;
  }

  cerrarModal() {
    this.isModalOpen = false;
    this.habitacionSeleccionada = null;
  }
}
