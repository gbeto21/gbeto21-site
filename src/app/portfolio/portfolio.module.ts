import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { MaterialModule } from "../material/material.module";
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class PortfolioModule { }
