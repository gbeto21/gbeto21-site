import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsService } from "./services/skills/skills.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SkillsService
  ]
})
export class CoreModule { }
