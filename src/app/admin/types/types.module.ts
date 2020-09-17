import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from "../../material/material.module";
import { TypesRoutingModule } from './types-routing.module';
import { TypesComponent } from './types/types.component';
import { AdminTypeComponent } from './admin-type/admin-type.component';


@NgModule({
  declarations: [TypesComponent, AdminTypeComponent],
  imports: [
    CommonModule,
    TypesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class TypesModule { }
