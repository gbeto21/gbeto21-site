import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioSectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
