import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path:"", redirectTo: "persona",pathMatch:"full"},
    //{path:"listado", component:ListadoComponent},
    //{path:"detalle", component:DetalleComponent}
    // {path:"persona", loadChildren:()=> import("./modules/modulo-persona/modulo-persona.module").then(mod=> mod.ModuloPersonaModule)}
    {path:'persona', loadChildren:()=> import('./modulo-persona/modulo-persona.module').then(mod=> mod.ModuloPersonaModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }


