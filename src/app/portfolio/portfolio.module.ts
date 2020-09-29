import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { MaterialModule } from "../material/material.module";
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SharedModule } from '../shared/shared.module';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';

@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioSectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PortfolioRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class PortfolioModule { }
