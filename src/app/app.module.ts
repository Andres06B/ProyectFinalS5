import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa FormsModule
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CountUpModule } from 'ngx-countup'; // Importa CountUpModule
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbardComponent } from './components/navbard/navbard.component';
import { FooterComponent } from './components/footer/footer.component';
import { Navbard2Component } from './components/navbard2/navbard2.component';
import { MainComponent } from './pages/aplicativo/main/main.component';
import { HabitacionesAppComponent } from './pages/aplicativo/habitaciones-app/habitaciones-app.component';
import { AcompanantesComponent } from './pages/aplicativo/acompanantes/acompanantes.component';
import { EstadiaComponent } from './pages/aplicativo/estadia/estadia.component';
import { ActividadesSComponent } from './pages/aplicativo/actividades-s/actividades-s.component';
import { HomeComponent } from './pages/web/home/home.component';
import { HabitacionesWebComponent } from './pages/web/habitaciones-web/habitaciones-web.component';
import { ReservasComponent } from './pages/web/reservas/reservas.component';
import { ServiciosComponent } from './pages/web/servicios/servicios.component';
import { NosotrosComponent } from './pages/web/nosotros/nosotros.component';
import { LogInComponent } from './pages/web/log-in/log-in.component';
import { FormularioReservasComponent } from './pages/web/reservas/formulario-reservas/formulario-reservas.component';
import { FacturaReservasComponent } from './pages/web/reservas/factura-reservas/factura-reservas.component';
import { Footer2Component } from './components/footer2/footer2.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbardComponent,
    FooterComponent,
    Navbard2Component,
    MainComponent,
    HabitacionesAppComponent,
    AcompanantesComponent,
    EstadiaComponent,
    ActividadesSComponent,
    HomeComponent,
    HabitacionesWebComponent,
    ReservasComponent,
    ServiciosComponent,
    NosotrosComponent,
    LogInComponent,
    FormularioReservasComponent,
    FacturaReservasComponent,
    Footer2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
