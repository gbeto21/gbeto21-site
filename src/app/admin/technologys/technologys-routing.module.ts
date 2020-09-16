import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechnologysComponent } from "./technologys/technologys.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TechnologysComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologysRoutingModule { }
