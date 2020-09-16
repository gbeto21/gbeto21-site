import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechnologysComponent } from "./technologys/technologys.component";
import { AdminTechnologyComponent } from "./admin-technology/admin-technology.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TechnologysComponent
      },
      {
        path: 'create',
        component: AdminTechnologyComponent
      },
      {
        path: 'details/:id',
        component: DetailsComponent
      },
      {
        path: 'edit/:id',
        component: AdminTechnologyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologysRoutingModule { }
