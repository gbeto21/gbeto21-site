import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from "./components/nav/nav.component";
import { SkillsComponent } from "./components/skills/skills.component";

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'skills',
        component: SkillsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
