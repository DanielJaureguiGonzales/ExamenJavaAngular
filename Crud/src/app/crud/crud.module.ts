import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreacionComponent } from './creacion/creacion.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { FormsModule } from '@angular/forms';
import { ActualizarComponent } from './actualizar/actualizar.component';



@NgModule({
  declarations: [
    BusquedaComponent,
    CreacionComponent,
    ActualizarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BusquedaComponent,
    CreacionComponent
  ]
})
export class CrudModule { }
