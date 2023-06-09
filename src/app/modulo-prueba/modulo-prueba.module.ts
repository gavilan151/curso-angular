import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentePruebaComponent } from './componente-prueba/componente-prueba.component';



@NgModule({

  // Declarations: se incluyen los componentes, directivas y pipes que pertenezcan al módulo.
  declarations: [
    ComponentePruebaComponent
  ],

  // Imports: Otros módulos, cuyas clases exportadas sean u tilizadas dentro del módulo en cuestión, en este caso MODULO-PRUEBA.
  imports: [
    CommonModule
  ]
})

// Exports: Los componentes y elementos que deben ser visibles desde otros módulos.
export class ModuloPruebaModule { }
