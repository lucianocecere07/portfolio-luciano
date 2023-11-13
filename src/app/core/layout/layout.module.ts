import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import { DarkModeComponent } from './dark-mode/dark-mode.component';


@NgModule({
  declarations: [
    NavbarComponent,
    DarkModeComponent,
  ],
  exports: [
    NavbarComponent,
    DarkModeComponent
  ],
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive
    ]
})
export class LayoutModule { }
