import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormazioneComponent } from './formazione/formazione.component';
import {
    FormationExperienceCardModule
} from "../../shared/shared/formation-experience-card/formation-experience-card.module";



@NgModule({
  declarations: [
    FormazioneComponent
  ],
    imports: [
        CommonModule,
        FormationExperienceCardModule
    ]
})
export class FormazioneModule { }
