import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {RouterLink} from "@angular/router";
import {NgxTypedJsModule} from "ngx-typed-js";

@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        RouterLink,
        NgxTypedJsModule,
    ]
})
export class HomeModule { }
