import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatisticsComponent } from "./statistics/statistics.component";
import { AdminStatisticComponent } from "./admin-statistic/admin-statistic.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: StatisticsComponent
      },
      {
        path: 'create',
        component: AdminStatisticComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
