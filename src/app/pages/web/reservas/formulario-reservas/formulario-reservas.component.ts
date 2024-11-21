import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UsuariosService } from '../../../../Services/Usuarios/usuarios.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Acompañante, Usuario } from '../../../../Interfaces/usuario/usuario.interface';
import { Reserva } from '../../../../Interfaces/Reserva/reserva.interface';
import { ReservaService } from '../../../../Services/Reserva/reserva.service';
import { PasarelaService } from '../../../../Services/Pasarela/pasarela.service';
import { Pasarela } from '../../../../Interfaces/Pasarela/pasarela.interface';

@Component({
  selector: 'app-formulario-reservas',
  templateUrl: './formulario-reservas.component.html',
  styleUrls: ['./formulario-reservas.component.css']
})
export class FormularioReservasComponent {
  id_habitacion: number | null = null;
  formData = {
    acompanantes: [{ nombre: '', tipoDocumento: '', documento: '' }],
  };
  acompananteForm: FormGroup;
  usuarioForm: FormGroup;
  reservaForm: FormGroup;
  pagoForm: FormGroup;

  minCheckInDate = new Date().toISOString().split('T')[0];
  minBirthDate = new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0];
  showModal: boolean = false;
  isProcessingPayment: boolean = false;
  Id_usuario: number | undefined;
  ID_reserva: number | undefined;
  Id_Pago: number | undefined;

  fechaReserva = new Date().toISOString().split('T')[0]
  fechaPago = new Date().toISOString().split('T')[0]

  constructor(private router: Router, private usuario: UsuariosService, private reserva: ReservaService, private pago: PasarelaService) {
    this.usuarioForm = new FormGroup({
      tipo_documento: new FormControl('', [Validators.required]),
      numero_documento: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      fecha_nacimiento: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      ciudad: new FormControl('', [Validators.required]),
      pais: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
    });

    this.acompananteForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      tipo_documento: new FormControl('', [Validators.required]),
      numero_documento: new FormControl('', [Validators.required]),
    });

    this.reservaForm = new FormGroup({
      fecha_entrada: new FormControl('', [Validators.required]),
      fecha_salida: new FormControl('', [Validators.required]),
    });

    this.pagoForm = new FormGroup({
      monto: new FormControl('', [Validators.required]),
      metodo_pago: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    const id = sessionStorage.getItem('Habitacion seleccionada');
    if (id) this.id_habitacion = Number(id);
  }

  agregarAcompanante() {
    this.formData.acompanantes.push({ nombre: '', tipoDocumento: '', documento: '' });
  }
  esFormularioValido(): boolean {
    const isAcompananteFormFilled = Object.values(this.acompananteForm.value).some(value => value);
    if (!this.usuarioForm.valid) {
      return false;
    }
    if (isAcompananteFormFilled && !this.acompananteForm.valid) {
      return false;
    }
    if (!this.reservaForm.valid) {
      return false;
    }
    if (!this.pagoForm.valid) {
      return false;
    }

    const birthDate = new Date(this.usuarioForm.get('fecha_nacimiento')?.value);
    const minDate = new Date(new Date().setFullYear(new Date().getFullYear() - 18));
    if (birthDate > minDate) {
      alert('El usuario debe ser mayor de 18 años.');
      return false;
    }
    return true;
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

  GuardarUsuario() {
    if (this.usuarioForm.valid) {
      const Usuario: Usuario = this.usuarioForm.value;
      this.usuario.guardarUsuario(Usuario).subscribe({
        next: (usuarioGuardado: Usuario) => {
          this.BuscarUsuario();
        },
        error: (error: any) => {
          console.error('Error al guardar el usuario:', error);
        }
      });
    }
  };

  BuscarUsuario() {
    const nombre = this.usuarioForm.value.nombre;
    const apellido = this.usuarioForm.value.apellido;
    this.usuario.obtenerUsuario(nombre, apellido).subscribe((usuario: Usuario) => {
      this.Id_usuario = usuario.id_usuario;
      this.GuardarAcompanante();
      this.CrearReserva();
    });
  }

  GuardarAcompanante() {
    if (this.acompananteForm.valid && this.Id_usuario) {
      const Acompañante: Acompañante = {
        ...this.acompananteForm.value,
        usuario: this.Id_usuario
      };
      this.usuario.guardarAcompañante(Acompañante).subscribe({
        next: (acompañanteGuardado: any) => {
        }
      });
    }
  }

  CrearReserva() {
    if (this.reservaForm.valid) {
      const reserva: Reserva = {
        ...this.reservaForm.value,
        fecha_reserva: this.fechaReserva,
        id_usuario: this.Id_usuario,
        id_habitacion: this.id_habitacion
      };

      this.reserva.crearReserva(reserva).subscribe({
        next: (reservaGuardada: Reserva) => {
          this.ObtenerReserva();
        }
      });
    }
  }

  ObtenerReserva() {
    const idUsuario = this.Id_usuario;
    const fechaEntrada = this.reservaForm.value.fecha_entrada;
    if (idUsuario) {
      this.reserva.obtenerReserva(idUsuario, fechaEntrada).subscribe((reserva: Reserva) => {
        this.ID_reserva = reserva.id_reserva;
        this.CrearPago();
      });
    }
  }

  CrearPago() {
    if (this.pagoForm.valid) {
      const pago: Pasarela = {
        ...this.pagoForm.value,
        id_reserva: this.ID_reserva,
        fecha_pago: this.fechaPago,
        estado: 'pendiente',
      };
      this.pago.crearPago(pago).subscribe({
        next: (pagoGuardado: Pasarela) => {
          this.ObtenerPago();
        },
        error: (error: any) => {
        }
      });
    }
  };

  ObtenerPago() {
    if (this.ID_reserva) {
      this.pago.obtenerPagoByReserva(this.ID_reserva).subscribe((pago: Pasarela) => {
        this.Id_Pago = pago.id_pago;
        console.log('Pago obtenido:', pago);
        sessionStorage.setItem('Pago obtenido', pago.id_pago.toString());
      });
    }
  }
}
