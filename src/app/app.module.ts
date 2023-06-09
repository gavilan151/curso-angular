import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalAdministrationModule } from './personal-administration/personal-administration.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    PersonalAdministrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
