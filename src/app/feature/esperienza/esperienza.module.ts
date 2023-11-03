import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsperienzaComponent } from './esperienza/esperienza.component';
import {
    FormationExperienceCardModule
} from "../../shared/shared/formation-experience-card/formation-experience-card.module";



@NgModule({
  declarations: [
    EsperienzaComponent
  ],
    imports: [
        CommonModule,
        FormationExperienceCardModule
    ]
})
export class EsperienzaModule { }
