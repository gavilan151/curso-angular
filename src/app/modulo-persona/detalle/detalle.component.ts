import { Component,Input } from '@angular/core';
import { persona } from 'src/app/models/persona';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  @Input()
  personaSeleccionada:persona | null = null  ;

}
