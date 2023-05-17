import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DetalleService } from './detalle.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { DetalleComponent } from './detalle/detalle.component';
import { EditarComponent } from './editar/editar.component';
import { NuevoComponent } from './nuevo/nuevo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonajesComponent,
    HomeComponent,
    AboutComponent,
    DetalleComponent,
    EditarComponent,
    NuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DetalleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
