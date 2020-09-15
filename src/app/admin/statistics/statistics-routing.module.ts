import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatisticsComponent } from "./statistics/statistics.component";
import { AdminStatisticComponent } from "./admin-statistic/admin-statistic.component";
import { DetailsComponent } from "./details/details.component";

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
      },
      {
        path: 'details/:id',
        component: DetailsComponent
      },
      {
        path: 'edit/:id',
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
