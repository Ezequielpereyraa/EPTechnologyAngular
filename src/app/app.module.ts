import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {RouterModule, Routes } from '@angular/router'
import {BodyComponent} from './components/body/body.component'
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AgregarComponent } from './agregar/agregar.component';

const routes : Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'body'
  },
  {
    path: 'body',
    component:BodyComponent
  },
  {
    path : 'catologo',
    component : CatalogoComponent
  },
  {
    path : 'ubicacion',
    component : UbicacionComponent
  },
  {
    path : 'contacto',
    component : ContactoComponent
  },
  { path : 'agregar',
  component : AgregarComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    UbicacionComponent,
    ContactoComponent,
    CatalogoComponent,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class YourAppModule { }
