import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  seccionActual = 'bienvenida'; // Por defecto, muestra la bienvenida

  // Función que cambia la sección actual según el botón del footer
  cambiarSeccion(seccion: string) {
    this.seccionActual = seccion;
  }

  ngOnInit() {
    const reservaId = sessionStorage.getItem('ReservaID');
    if (reservaId) {
      console.log('ID de reserva cargada:', reservaId);
    }
  }
}
