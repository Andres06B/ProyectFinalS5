import { Component } from '@angular/core';

@Component({
  selector: 'app-acompanantes',
  templateUrl: './acompanantes.component.html',
  styleUrl: './acompanantes.component.css'
})
export class AcompanantesComponent {
  companions = [
    { name: 'Juan Pérez', documentType: 'CC', documentNumber: '1234567890' },
    { name: 'María García', documentType: 'TI', documentNumber: '2345678901' },
    { name: 'Carlos Pérez', documentType: 'CC', documentNumber: '3456789012' },
  ];

 
  selectedCompanion: any = null;

  
  viewCompanionDetails(companion: any) {
    this.selectedCompanion = companion;
  }

  
  closeCompanionDetails() {
    this.selectedCompanion = null;
  }
}
