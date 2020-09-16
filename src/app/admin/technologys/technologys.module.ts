import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from "../../material/material.module";
import { TechnologysRoutingModule } from './technologys-routing.module';
import { TechnologysComponent } from './technologys/technologys.component';
import { AdminTechnologyComponent } from './admin-technology/admin-technology.component';


@NgModule({
  declarations: [TechnologysComponent, AdminTechnologyComponent],
  imports: [
    CommonModule,
    TechnologysRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class TechnologysModule { }
