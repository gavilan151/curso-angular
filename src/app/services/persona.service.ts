import { Injectable } from '@angular/core';
import { persona } from '../models/persona';
import { Observable, of, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  constructor() {}
  personaList: persona[] = [
    new persona(1, 30, 'Claudia', 'Flosi'),
    new persona(2, 10, 'Juan', 'Anuk'),
    new persona(3, 30, 'Pepe', 'Zanches'),
  ];
  
  findAll(): Observable<persona[]> {
    return of(this.personaList).pipe(
      catchError((err) => {
        console.log('Ocurrio un Error');
        return throwError(() => 'Error xxxx');
      })
    );
  }
}
