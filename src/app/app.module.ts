import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerPortadaComponent } from './components/container-portada/container-portada.component';
import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
import { TabSeccionesComponent } from './components/tab-secciones/tab-secciones.component';
import { SeccionTab1Component } from './components/seccion-tab1/seccion-tab1.component';
import { SeccionTab2Component } from './components/seccion-tab2/seccion-tab2.component';
import { SeccionTab3Component } from './components/seccion-tab3/seccion-tab3.component';

import { MeterialModule } from "./meterial/meterial.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerPortadaComponent,
    MenuNavComponent,
    TabSeccionesComponent,
    SeccionTab1Component,
    SeccionTab2Component,
    SeccionTab3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MeterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
