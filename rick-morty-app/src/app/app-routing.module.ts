import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { AboutComponent } from '../app/about/about.component';
import { PersonajesComponent } from '../app/personajes/personajes.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  { path: '', component: HomeComponent },       // Ruta raíz, página home
  { path: 'about', component: AboutComponent }, // Ruta para la página About
  { path: 'personajes', component: PersonajesComponent }, // Ruta para la página de Personajes
  { path: 'detalles/:id', component: DetalleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
