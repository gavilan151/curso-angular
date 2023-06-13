import { Component } from '@angular/core';
import { persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  personaList: persona[] = [
    new persona(1,46, 'Gabriel', 'Miguel'),
    new persona(2,26, 'Sandra', 'Juarez'),
    new persona(3,15, 'Mateo', 'Perez'),
  ];

  personaSeleccionada: persona | null = null;


  constructor(private personaService: PersonaService) {}
  ngOnInit() {
    this.personaService.findAll().subscribe(res =>{
      this.personaList = res;
    }, error => {
      console.log("Ocurrio un error");
    }) ;
  }
  seleccionarPersona(xpersona: persona) {
    this.personaSeleccionada = xpersona;
  }
}
