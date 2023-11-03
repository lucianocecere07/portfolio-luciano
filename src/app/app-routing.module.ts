import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./feature/home/home/home.component";

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "", loadChildren: ()=> import("./feature/pages.module").then(m => m.PagesModule)},
  {path: "**", redirectTo: "home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
