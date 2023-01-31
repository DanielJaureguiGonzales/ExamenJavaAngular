import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreacionComponent } from './crud/creacion/creacion.component';
import { BusquedaComponent } from './crud/busqueda/busqueda.component';
import { ActualizarComponent } from './crud/actualizar/actualizar.component';



const routes : Routes=[
  {
    path: 'crear',
    component: CreacionComponent
  },
  {
    path: 'listar',
    component: BusquedaComponent
  },
  {
    path: 'actualizar/{:id}',
    component: ActualizarComponent
  }

];


@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
  ],
  exports:[
    RouterModule
  ]

})
export class AppRoutingModule { }
