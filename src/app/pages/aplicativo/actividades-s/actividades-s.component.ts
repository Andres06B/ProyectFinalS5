import { Component } from '@angular/core';

@Component({
  selector: 'app-actividades-s',
  templateUrl: './actividades-s.component.html',
  styleUrl: './actividades-s.component.css'
})
export class ActividadesSComponent {
  activities = [
    {
      title: "Excursión a la Playa",
      description: "Disfruta de un día en las hermosas playas de Cartagena.",
      icon: "bi bi-sun-fill",
      offers: ["Descuento de 10% si reservas hoy", "Incluye transporte"],
    },
    {
      title: "Tour Cultural",
      description: "Descubre la rica historia y cultura de Cartagena con un tour guiado por los lugares más emblemáticos.",
      icon: "bi bi-geo-alt-fill",
      offers: ["Guía experto incluido", "Transporte ida y vuelta"],
    },
    {
      title: "Visita a Cafeterías",
      description: "Disfruta de un recorrido por las mejores cafeterías locales, probando delicias típicas.",
      icon: "bi bi-cup-hot-fill",
      offers: ["Café gratis en la primera parada", "Tour guiado"],
    },
    {
      title: "Clases de Cocina",
      description: "Aprende a preparar platos típicos de la región con ingredientes frescos y locales.",
      icon: "bi bi-egg-fried",
      offers: ["Recetas incluidas", "Todos los ingredientes proporcionados"],
    },
    {
      title: "Excursión a Islas",
      description: "Visita las islas cercanas y disfruta de la naturaleza, con actividades de snorkel incluidas.",
      icon: "bi bi-water",
      offers: ["Descuento especial de temporada", "Incluye almuerzo"],
    },
    {
      title: "Recorridos en Bicicleta",
      description: "Descubre la ciudad en bicicleta con guías locales, explorando los lugares más bellos.",
      icon: "bi bi-bicycle",
      offers: ["Guía especializado", "Incluye alquiler de bicicleta"],
    }
  ];

  selectedActivity: any = null;
  loading = false;
  selectedDate: string = '';
  today: string = new Date().toISOString().split('T')[0]; 
  openReservationModal(activity: any): void {
    this.selectedActivity = activity;
    const reservationModal = new (window as any).bootstrap.Modal(document.getElementById('reservationModal'));
    reservationModal.show();
  }

  reserveActivity(): void {
    if (this.selectedDate < this.today) {
      alert('No puedes seleccionar una fecha pasada.');
      return;
    }

    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      const reservationModal = (window as any).bootstrap.Modal.getInstance(document.getElementById('reservationModal'));
      reservationModal.hide();

    
      const confirmationModal = new (window as any).bootstrap.Modal(document.getElementById('confirmationModal'));
      confirmationModal.show();
    }, 2000); 
  }

  closeConfirmation(): void {
    const confirmationModal = (window as any).bootstrap.Modal.getInstance(document.getElementById('confirmationModal'));
    confirmationModal.hide();
  }
}
