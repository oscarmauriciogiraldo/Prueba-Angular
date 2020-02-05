import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerPortadaComponent } from './components/container-portada/container-portada.component';
import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
import { TabSeccionesComponent } from './components/tab-secciones/tab-secciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerPortadaComponent,
    MenuNavComponent,
    TabSeccionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
