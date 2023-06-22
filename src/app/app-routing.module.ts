import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./preguntas/components/home/home.component";
import {CapitalesComponent} from "./preguntas/components/capitales/capitales.component";
import {BanderasComponent} from "./preguntas/components/banderas/banderas.component";

const routes: Routes = [
  {path:"preguntas/home", component: HomeComponent},
  {path:"",redirectTo: "preguntas/home", pathMatch:"full"},
  {path:"preguntas/capitales",component: CapitalesComponent},
  {path:"preguntas/banderas", component: BanderasComponent},
  {path:"**",redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
