import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormationExperienceCardComponent} from "./formation-experience-card.component";



@NgModule({
  declarations: [
    FormationExperienceCardComponent
  ],
  exports: [
    FormationExperienceCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormationExperienceCardModule { }
