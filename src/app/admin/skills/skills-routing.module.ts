import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from "./skills/skills.component";
import { AdminComponent } from "./admin/admin.component";
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
        component: AdminComponent
      },
      {
        path: 'details/:id',
        component: DetailsComponent
      },
      {
        path: 'edit/:id',
        component: AdminComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
