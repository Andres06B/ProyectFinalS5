import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrl: './footer2.component.css'
})
export class Footer2Component {
  @Output() seccionCambiada = new EventEmitter<string>();

  seleccionarSeccion(seccion: string) {
    this.seccionCambiada.emit(seccion);
  }
}
