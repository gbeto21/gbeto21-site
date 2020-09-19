import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { AdminProjectsComponent } from "./admin-projects/admin-projects.component";
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProjectsComponent
      },
      {
        path: 'create',
        component: AdminProjectsComponent
      },
      {
        path: 'details/:id',
        component: DetailsComponent
      },
      {
        path: 'edit/:id',
        component: AdminProjectsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
