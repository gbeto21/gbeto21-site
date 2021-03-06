import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../../material/material.module";
import { ReactiveFormsModule} from '@angular/forms';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { AdminProjectsComponent } from './admin-projects/admin-projects.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [ProjectsComponent, AdminProjectsComponent, DetailsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ProjectsModule { }
