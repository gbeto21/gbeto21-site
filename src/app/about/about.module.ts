import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MaterialModule } from "../material/material.module";

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from "./about/about.component";
import { LayoutComponent } from "../layout/layout.component";
import { IntroduceComponent } from './introduce/introduce.component';
import { SkillComponent } from "./skill/skill.component";
import { SkillsComponent } from './skills/skills.component';
import { EasyPieChartDirective } from './skill/easy-pie-chart.directive';

@NgModule({
  declarations: [
    AboutComponent,
    LayoutComponent,
    IntroduceComponent,
    SkillComponent,
    SkillsComponent,
    EasyPieChartDirective
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MaterialModule,
    SlickCarouselModule
  ]
})
export class AboutModule { }
