import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { SkillsService } from "./services/skills/skills.service";
import { StatisticService } from "./services/statistics/statistic.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    SkillsService,
    StatisticService
  ]
})
export class CoreModule { }
