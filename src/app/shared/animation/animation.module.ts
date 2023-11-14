import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, animate, transition } from '@angular/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    BrowserAnimationsModule
  ]
})
export class AnimationModule {}

export const animationAnimation = trigger('animation', [
  state('void', style({ opacity: 0, transform: 'translateY(1.2rem)' })),
  transition('void <=> *', animate(1000)),
]);
