import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './detalle/detalle.component';
import { FormsModule } from '@angular/forms';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
  declarations: [
    DetalleComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[DetalleComponent,ListadoComponent]
})
export class ModuloPersonaModule { }
