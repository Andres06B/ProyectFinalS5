import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-factura-reservas',
  templateUrl: './factura-reservas.component.html',
  styleUrls: ['./factura-reservas.component.css']
})
export class FacturaReservasComponent {
  constructor(private router: Router) {}

  volverAlInicio() {
    this.router.navigate(['/Home']);
  }

  generarFacturaPDF() {
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
      doc.text('Nombre del Huésped: Juan Pérez', 14, 55);
      doc.text('Nacionalidad: Colombiano', 14, 65);
      doc.text('Correo Electrónico: juan.perez@example.com', 14, 75);
      doc.text('Hotel: Iguana\'s House, Colombia', 14, 90);
      doc.text('Entrada: 8 Octubre 2024, Martes', 14, 100);
      doc.text('Salida: 9 Octubre 2024, Miércoles', 14, 110);
      doc.text('Noches: 1', 14, 120);
      doc.text('Ocupación: 2 Adultos', 14, 130);
      doc.text('Habitación: Tech Room', 14, 140);
      doc.text('Descripción de la Habitación: Habitación moderna equipada con tecnología de última generación.', 14, 150);
      doc.text('Régimen: Desayuno incluido', 14, 160);
      doc.text('Tarifa: Tarifa Flexible', 14, 170);

      const tableData = [
        ['Descripción', 'Costo'],
        ['Total sin impuestos', 'COP 628,150.00'],
        ['Impuestos 19%', 'COP 119,348.50'],
        ['Total', 'COP 747,498.50']
      ];

      autoTable(doc, {
        head: [['Descripción', 'Costo']],
        body: tableData.slice(1),
        startY: 185,
        theme: 'grid',
        styles: {
          fontSize: 10,
          halign: 'center'
        },
        headStyles: {
          fillColor: [22, 160, 133],
          textColor: [255, 255, 255]
        },
        alternateRowStyles: {
          fillColor: [240, 240, 240]
        }
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
