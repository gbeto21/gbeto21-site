import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MaterialModule } from "../material/material.module";

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from "./about/about.component";
import { IntroduceComponent } from './introduce/introduce.component';
import { SkillComponent } from "./skill/skill.component";
import { SkillsComponent } from './skills/skills.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AboutComponent,
    IntroduceComponent,
    SkillComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MaterialModule,
    SlickCarouselModule,
    SharedModule
  ]
})
export class AboutModule { }
