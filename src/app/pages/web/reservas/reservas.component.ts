import { Component } from '@angular/core';

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

  
  minDate: string;

  constructor() {
    const today = new Date();
    this.minDate = this.formatDate(today);
  }

  
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  habitaciones = [
    {
      nombre: 'Garabato',
      descripcion: 'Suite elegante con sala de estar y vistas panorámicas a la ciudad. Ideal para una estancia lujosa y relajante.',
      servicios: 'Internet, Baño, A/C, TV',
      precio: 180.000,
      imagen: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/562574663.jpg?k=bbce5f9b1ca20d2bd0410fff8bf115fc856a3ae5b3ac85010423e9f3752b3db9&o=&hp=1',
    },
    {
      nombre: 'Puya',
      descripcion: 'Habitación moderna con dos camas individuales y decoración contemporánea, perfecta para un viaje cómodo.',
      servicios: 'Internet, Baño, A/C, TV',
      precio: 193.000,
      imagen: 'https://www.hotelmorenoviejo.com/wp-content/uploads/2014/11/sencilla.jpg',
    },
    {
      nombre: 'Porro',
      descripcion: 'Habitación familiar espaciosa, equipada con una cama king y literas, diseñada para disfrutar en familia.',
      servicios: 'Internet, Baño, A/C, TV',
      precio: 170.000,
      imagen: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/535159405.jpg?k=5bfb0b96ac9da280cff8137376d7d67f9851bcd35a1c468335f06343a9850a70&o=&hp=1',
    },
    {
      nombre: 'Champeta',
      descripcion: 'Lujosa suite con jacuzzi y comedor privado, perfecta para una escapada romántica con vistas al mar.',
      servicios: 'Internet, Baño, A/C, TV',
      precio: 165.000,
      imagen: 'https://fridahotelunico.com/images/sencilla03.jpg',
    },
    {
      nombre: 'Cumbia',
      descripcion: 'Acogedora habitación sencilla con cama queen, ideal para descansar después de un día de exploración.',
      servicios: 'Internet, Baño, A/C, TV',
      precio: 155.000,
      imagen: 'https://hoteloroverdesuitesiquitos.com/wp-content/uploads/2021/07/Simple-1-1-scaled.jpg',
    },
    {
      nombre: 'Merecumbe',
      descripcion: 'Amplia suite con sala de estar, bañera y vistas espectaculares a la montaña, perfecta para una estancia relajante.',
      servicios: 'Internet, Baño, A/C, TV',
      precio: 190.000,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1p930I2BaJzXYjlLy02hTZFvXhgicOOriQ&s',
    },
    {
      nombre: 'Fandango',
      descripcion: 'Habitación básica y funcional con cama doble, ideal para estancias cortas o viajeros de paso.',
      servicios: 'Internet, Baño, A/C, TV',
      precio: 150.000,
      imagen: 'https://hotelcasablancagirardot.com/wp-content/plugins/vikbooking/site/resources/uploads/1dsc04585.jpg',
    },
    {
      nombre: 'Bullerengue',
      descripcion: 'Ático exclusivo con terraza privada y piscina de borde infinito, ideal para disfrutar de una estancia única.',
      servicios: 'Internet, Baño, A/C, TV',
      precio: 145.000,
      imagen: 'https://www.hotelcentralteziutlan.com/wp-content/uploads/2021/04/habitacion-sencilla-02.jpg',
    },
    {
      nombre: 'Mapale',
      descripcion: 'Habitación luminosa con balcón privado y vistas al jardín, perfecta para relajarse en contacto con la naturaleza.',
      servicios: 'Internet, Baño, A/C, TV',
      precio: 175.000,
      imagen: 'https://www.solcaribehotel.com/img/cama-doble-sencilla-1.jpg',
    }
    
  ];

  consultarDisponibilidad() {
    this.errorMessage = '';

    
    if (!this.checkin || !this.checkout || this.adultos < 1 || this.ninos < 0) {
      this.errorMessage = 'Por favor, complete todos los campos requeridos.';
      this.mostrarHabitaciones = false;
      return;
    }

    this.mostrarHabitaciones = true;
  }
}
