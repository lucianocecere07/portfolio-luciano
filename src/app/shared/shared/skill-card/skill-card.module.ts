import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCardComponent } from './skill-card.component';



@NgModule({
  declarations: [
    SkillCardComponent
  ],
  exports: [
    SkillCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SkillCardModule { }
