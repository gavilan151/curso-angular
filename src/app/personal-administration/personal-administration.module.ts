import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalAdministrationComponent } from './personal-administration/personal-administration.component';
import { PersonalComponentComponent } from './personal-component/personal-component.component';



@NgModule({
  declarations: [
    PersonalAdministrationComponent,
    PersonalComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PersonalAdministrationModule { }
