import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';

import { MaterialModule } from "../../material/material.module";
import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { AdminStatisticComponent } from './admin-statistic/admin-statistic.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [StatisticsComponent, AdminStatisticComponent, DetailsComponent],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class StatisticsModule { }
