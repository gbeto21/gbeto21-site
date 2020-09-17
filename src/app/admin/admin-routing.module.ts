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
      },
      {
        path: 'statistics',
        loadChildren: () => import('./statistics/statistics.module').then(m => m.StatisticsModule)
      },
      {
        path: 'technologys',
        loadChildren: () => import('./technologys/technologys.module').then(m => m.TechnologysModule)
      },
      {
        path: 'types',
        loadChildren: () => import('./types/types.module').then(m => m.TypesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
