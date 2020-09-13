import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from "./skills/skills.component";
import { AdminSkillComponent } from "./admin/admin-skill.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SkillsComponent
      },
      {
        path: 'create',
        component: AdminSkillComponent
      },
      {
        path: 'details/:id',
        component: DetailsComponent
      },
      {
        path: 'edit/:id',
        component: AdminSkillComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
