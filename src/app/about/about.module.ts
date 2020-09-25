import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../material/material.module";

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from "./about/about.component";
import { LayoutComponent } from "../layout/layout.component";
import { IntroduceComponent } from './introduce/introduce.component';

@NgModule({
  declarations: [AboutComponent, LayoutComponent, IntroduceComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MaterialModule
  ]
})
export class AboutModule { }
