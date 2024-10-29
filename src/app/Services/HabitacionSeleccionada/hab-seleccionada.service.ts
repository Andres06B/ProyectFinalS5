import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HabSeleccionadaService {

  private habitacionSeleccionada: number | null = null;
  constructor() { }

  setHabitacionSeleccionada(habitacion: number) {
    this.habitacionSeleccionada = habitacion;
  }

  getHabitacionSeleccionada(): number | null {
    return this.habitacionSeleccionada;
  }
}
