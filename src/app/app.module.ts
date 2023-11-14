import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LayoutModule} from "./core/layout/layout.module";
import {RouterModule} from "@angular/router";
import {PagesModule} from "./feature/pages.module";
import {AnimationModule} from "./shared/animation/animation.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    LayoutModule,
    PagesModule,
    AnimationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
