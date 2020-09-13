import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../../material/material.module";

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from "./skills/skills.component";
import { AdminSkillComponent } from "./admin/admin-skill.component";
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AdminSkillComponent, SkillsComponent, DetailsComponent],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SkillsModule { }
