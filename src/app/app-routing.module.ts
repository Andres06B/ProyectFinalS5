import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/web/home/home.component';
import { HabitacionesWebComponent } from './pages/web/habitaciones-web/habitaciones-web.component';
import { ReservasComponent } from './pages/web/reservas/reservas.component';
import { ServiciosComponent } from './pages/web/servicios/servicios.component';
import { NosotrosComponent } from './pages/web/nosotros/nosotros.component';
import { FormularioReservasComponent } from './pages/web/reservas/formulario-reservas/formulario-reservas.component';
import { FacturaReservasComponent } from './pages/web/reservas/factura-reservas/factura-reservas.component';
import { LogInComponent } from './pages/web/log-in/log-in.component';
import { MainComponent } from './pages/aplicativo/main/main.component';
import { AcompanantesComponent } from './pages/aplicativo/acompanantes/acompanantes.component';
import { ActividadesSComponent } from './pages/aplicativo/actividades-s/actividades-s.component';
import { EstadiaComponent } from './pages/aplicativo/estadia/estadia.component';
import { HabitacionesAppComponent } from './pages/aplicativo/habitaciones-app/habitaciones-app.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'Home', pathMatch: 'full'
  },
  {
    path: 'Home', component: HomeComponent
  },
  {
    path: 'Habitaciones', component: HabitacionesWebComponent
  },
  {
    path: 'Reservas', component: ReservasComponent
  },
  {
    path: 'FormularioReservas', component: FormularioReservasComponent
  },
  {
    path: 'FacturaReservas', component: FacturaReservasComponent
  },
  {
    path: 'Servicios', component: ServiciosComponent
  },
  {
    path: 'Nosotros', component: NosotrosComponent
  },
  {
    path: 'Log-in', component: LogInComponent
  },

  //Aplicativo

  {
    path: 'Main', component: MainComponent
  },
  {
    path: 'Acompañantes', component: AcompanantesComponent
  },
  {
    path: 'Actividades', component: ActividadesSComponent
  },
  {
    path: 'Estadia', component: EstadiaComponent
  },
  {
    path: 'HabitacionesApp', component: HabitacionesAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
