import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../../material/material.module";

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from "./skills/skills.component";
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [SkillsComponent, DetailsComponent],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    MaterialModule
  ]
})
export class SkillsModule { }
