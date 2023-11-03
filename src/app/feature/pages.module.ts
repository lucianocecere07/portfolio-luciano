import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ChiSonoComponent} from "./chi-sono/chi-sono/chi-sono.component";
import {CompetenzeComponent} from "./competenze/competenze/competenze.component";
import {EsperienzaComponent} from "./esperienza/esperienza/esperienza.component";
import {FormazioneComponent} from "./formazione/formazione/formazione.component";
import {ContattiComponent} from "./contatti/contatti/contatti.component";
import {HomeComponent} from "./home/home/home.component";
import {CompetenzeModule} from "./competenze/competenze.module";
import {ChiSonoModule} from "./chi-sono/chi-sono.module";
import {ContattiModule} from "./contatti/contatti.module";
import {EsperienzaModule} from "./esperienza/esperienza.module";
import {FormazioneModule} from "./formazione/formazione.module";
import {HomeModule} from "./home/home.module";

const routes: Routes = [
  {path: "profilo", component: ChiSonoComponent},
  {path: "competenze", component: CompetenzeComponent},
  {path: "esperienze", component: EsperienzaComponent},
  {path: "formazione", component: FormazioneComponent},
  {path: "contatti", component: ContattiComponent},
  {path: "", component: HomeComponent},
  {path: "**", component: HomeComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CompetenzeModule,
    ChiSonoModule,
    ContattiModule,
    EsperienzaModule,
    FormazioneModule,
    HomeModule
  ]
})
export class PagesModule { }
