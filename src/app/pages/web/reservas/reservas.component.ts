import { Component } from '@angular/core';
import { Habitacion } from '../../../Interfaces/habitacion/habitacion.interface';
import { HabitacionService } from '../../../Services/Habitacion/habitacion.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';


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

  imageLinks: string[] = [
    "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/562574663.jpg?k=bbce5f9b1ca20d2bd0410fff8bf115fc856a3ae5b3ac85010423e9f3752b3db9&o=&hp=1",
    "https://www.hotelmorenoviejo.com/wp-content/uploads/2014/11/sencilla.jpg",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/535159405.jpg?k=5bfb0b96ac9da280cff8137376d7d67f9851bcd35a1c468335f06343a9850a70&o=&hp=1",
    "https://fridahotelunico.com/images/sencilla03.jpg",
    "https://hoteloroverdesuitesiquitos.com/wp-content/uploads/2021/07/Simple-1-1-scaled.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1p930I2BaJzXYjlLy02hTZFvXhgicOOriQ&s",
    "https://hotelcasablancagirardot.com/wp-content/plugins/vikbooking/site/resources/uploads/1dsc04585.jpg",
    "https://www.solcaribehotel.com/img/cama-doble-sencilla-1.jpg",
    "https://i0.wp.com/amenitiz.com/wp-content/uploads/2022/10/kgqgnwmtziuttytvkfru.jpg?fit=2048%2C1365&ssl=1"
  ];


  constructor(private service: HabitacionService, private router: Router, ) {	
    const today = new Date();
    this.minDate = this.formatDate(today);
  }

  ngOnInit() {
    this.ObternerHabitaciones();
  }

  seleccionarHabitacion(habitacion: Habitacion) {
    sessionStorage.setItem('Habitacion seleccionada',habitacion.id_habitacion.toString());
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
    });
  }

  NavegarFormularioReserva(){
    this.router.navigate(['/FormularioReservas'])
  }
}
