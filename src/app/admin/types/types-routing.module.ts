import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypesComponent } from './types/types.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TypesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypesRoutingModule { }
