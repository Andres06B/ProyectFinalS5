import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HabSeleccionadaService } from '../../../../Services/HabitacionSeleccionada/hab-seleccionada.service';

@Component({
  selector: 'app-formulario-reservas',
  templateUrl: './formulario-reservas.component.html',
  styleUrls: ['./formulario-reservas.component.css']
})
export class FormularioReservasComponent {
  id_habitacion: number | null = null;
  formData = {
    checkIn: '',
    checkOut: '',
    nombre: '',
    apellido: '',
    tipoDocumento: '',
    documento: '',
    fechaNacimiento: '',
    email: '',
    telefono: '',
    nacionalidad: '',
    ciudad: '',
    pais: '',
    direccion: '',
    acompanantes: [{ nombre: '', tipoDocumento: '', documento: '' }],
    tipoTarjeta: '',
    numTarjeta: '',
    expTarjeta: '',
    cvcTarjeta: '',
    montoAPagar: 0
  };

  minCheckInDate = new Date().toISOString().split('T')[0];
  minBirthDate = new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0];
  showModal: boolean = false;
  isProcessingPayment: boolean = false;
  ratePerNight: number = 100;

  constructor(private router: Router, private habitacionSeleccionadaService: HabSeleccionadaService) {}

  ngOnInit() {
    const id = this.habitacionSeleccionadaService.getHabitacionSeleccionada();
  console.log('ID de habitación seleccionada: ', id);
  }

  agregarAcompanante() {
    this.formData.acompanantes.push({ nombre: '', tipoDocumento: '', documento: '' });
  }

  esFormularioValido(): boolean {
    const { checkIn, checkOut, nombre, apellido, tipoDocumento, documento, fechaNacimiento, email, telefono, tipoTarjeta, numTarjeta, expTarjeta, cvcTarjeta, montoAPagar } = this.formData;

    
    if (!checkIn || !checkOut || !nombre || !apellido || !tipoDocumento || !documento || !fechaNacimiento || !email || !telefono || !tipoTarjeta || !numTarjeta || !expTarjeta || !cvcTarjeta || !montoAPagar) {
      return false;
    }

    const birthDate = new Date(fechaNacimiento);
    const today = new Date();
    const minDate = new Date(today.setFullYear(today.getFullYear() - 18));
    if (birthDate > minDate) {
      return false;
    }

    

    return true;
  }

  calcularMontoAPagar() {
    const checkInDate = new Date(this.formData.checkIn);
    const checkOutDate = new Date(this.formData.checkOut);

    if (checkInDate && checkOutDate && checkInDate < checkOutDate) {
      const nights = (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24);
      this.formData.montoAPagar = nights * this.ratePerNight;
    } else {
      this.formData.montoAPagar = 0;
    }
  }

  procesarPago() {
    if (this.esFormularioValido()) {
      this.showModal = true;
    } else {
      alert('Por favor, complete todos los campos requeridos.');
    }
  }

  cerrarModal() {
    this.showModal = false;
  }

  confirmarPago() {
    this.isProcessingPayment = true;
    setTimeout(() => {
      this.cerrarModal();
      this.isProcessingPayment = false;
      this.router.navigate(['/FacturaReservas']);
    }, 2000);
  }
}
