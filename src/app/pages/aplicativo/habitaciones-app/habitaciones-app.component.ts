import { Component } from '@angular/core';

interface Room {
  name: string;
  icon: string;
  description: string;
  services: string[];
}
@Component({
  selector: 'app-habitaciones-app',
  templateUrl: './habitaciones-app.component.html',
  styleUrl: './habitaciones-app.component.css'
})
  
  
export class HabitacionesAppComponent {
  habitaciones = [
    { nombre: 'Suite Ejecutiva', detalles: 'Capacidad: 2 personas, vista al mar, incluye desayuno' },
    { nombre: 'Habitación Doble', detalles: 'Capacidad: 2 personas, vista a la ciudad, incluye wifi' },
    { nombre: 'Habitación Familiar', detalles: 'Capacidad: 4 personas, balcón, incluye desayuno y wifi' },
  ];

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
}
