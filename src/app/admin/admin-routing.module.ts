import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from "./components/nav/nav.component";

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'skills',
        loadChildren: () => import('./skills/skills.module').then(m => m.SkillsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
