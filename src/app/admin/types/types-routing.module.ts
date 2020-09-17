import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypesComponent } from './types/types.component';
import { AdminTypeComponent } from "./admin-type/admin-type.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TypesComponent
      },
      {
        path: 'create',
        component: AdminTypeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypesRoutingModule { }
