import { NgModule } from '@angular/core';
import { CompetenzeComponent } from './competenze/competenze.component';
import {CommonModule} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {SkillCardModule} from "../../shared/shared/skill-card/skill-card.module";

@NgModule({
  declarations: [
    CompetenzeComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    SkillCardModule
  ]
})
export class CompetenzeModule { }
