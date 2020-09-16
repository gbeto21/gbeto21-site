import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechnologysComponent } from "./technologys/technologys.component";
import { AdminTechnologyComponent } from "./admin-technology/admin-technology.component";

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
