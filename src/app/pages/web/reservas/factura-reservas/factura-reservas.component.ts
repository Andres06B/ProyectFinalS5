import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Router } from '@angular/router';
import { PasarelaService } from '../../../../Services/Pasarela/pasarela.service';

@Component({
  selector: 'app-factura-reservas',
  templateUrl: './factura-reservas.component.html',
  styleUrls: ['./factura-reservas.component.css']
})
export class FacturaReservasComponent {
  id_pago!: number;
  pagoData: any; 

  constructor(private router: Router, private pasarela: PasarelaService) {}

  ngOnInit() {
    this.id_pago = Number(sessionStorage.getItem('Pago obtenido'));
    this.obtenerPago();
  }

  obtenerPago() {
    this.pasarela.obtenerPagoById(this.id_pago).subscribe((pago: any) => {
      this.pagoData = pago; 
    });
  }

  volverAlInicio() {
    this.router.navigate(['/Home']);
  }

  generarFacturaPDF() {
    if (!this.pagoData) {
      console.error('No se encontraron datos de pago');
      return;
    }

    const pago = this.pagoData;
    const doc = new jsPDF();
    const logoUrl = 'Imagen1.png';

    const img = new Image();
    img.src = logoUrl;
    img.onload = () => {
      doc.addImage(img, 'PNG', 150, 10, 40, 20);
      doc.setFontSize(24);
      doc.setFont('helvetica', 'bold');
      doc.text('Factura de Reserva', 14, 40);
      doc.setLineWidth(0.5);
      doc.line(14, 45, 196, 45);

      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      doc.text(`Nombre del Huésped: ${pago.reserva.usuario.nombre} ${pago.reserva.usuario.apellido}`, 14, 55);
      doc.text(`Nacionalidad: ${pago.reserva.usuario.pais}`, 14, 65);
      doc.text(`Correo Electrónico: ${pago.reserva.usuario.email}`, 14, 75);
      
      doc.text('Hotel: Iguana\'s House, Colombia', 14, 90);
      doc.text(`Entrada: ${new Date(pago.reserva.fecha_entrada).toLocaleDateString()}`, 14, 100);
      doc.text(`Salida: ${new Date(pago.reserva.fecha_salida).toLocaleDateString()}`, 14, 110);
      doc.text('Noches: 2', 14, 120); 
      doc.text(`Habitación: ${pago.reserva.habitacion.nombre} - ${pago.reserva.habitacion.tipo}`, 14, 130);
      doc.text(`Estado de Habitación: Reservada`, 14, 140);

      doc.text(`Método de Pago: ${pago.metodo_pago}`, 14, 160);
      doc.text(`Estado del Pago: ${pago.estado}`, 14, 170);
      doc.text(`Monto: COP ${pago.monto.toFixed(2)}`, 14, 180);


      const tableData = [
        ['Descripción', 'Costo'],
        ['Total sin impuestos', `COP ${pago.monto.toFixed(2)}`],
        ['Impuestos 19%', `COP ${(pago.monto * 0.19).toFixed(2)}`],
        ['Total', `COP ${(pago.monto * 1.19).toFixed(2)}`]
      ];

      autoTable(doc, {
        head: [['Descripción', 'Costo']],
        body: tableData.slice(1),
        startY: 190,
        theme: 'grid',
        styles: { fontSize: 10, halign: 'center' },
        headStyles: { fillColor: [22, 160, 133], textColor: [255, 255, 255] },
        alternateRowStyles: { fillColor: [240, 240, 240] }
      });

      doc.setFontSize(10);
      const footerText = 'Gracias por reservar con nosotros.';
      const pageHeight = doc.internal.pageSize.height;
      const footerY = pageHeight - 20;
      doc.text(footerText, 14, footerY);

      doc.save('factura_reserva.pdf');
    };

    img.onerror = () => {
      console.error('Error al cargar la imagen del logo.');
    };
  }
}
