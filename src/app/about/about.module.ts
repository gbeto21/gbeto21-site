import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MaterialModule } from "../material/material.module";

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from "./about/about.component";
import { LayoutComponent } from "../layout/layout.component";
import { FooterComponent } from "../footer/footer.component";
import { IntroduceComponent } from './introduce/introduce.component';
import { SkillComponent } from "./skill/skill.component";
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AboutComponent,
    LayoutComponent,
    IntroduceComponent,
    SkillComponent,
    SkillsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MaterialModule,
    SlickCarouselModule
  ]
})
export class AboutModule { }
