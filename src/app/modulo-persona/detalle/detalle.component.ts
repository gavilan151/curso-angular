import { Component } from '@angular/core';
import { persona } from 'src/app/models/persona';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  persona: persona = new persona( 26,"Gabriel",  "Miguel")
}
