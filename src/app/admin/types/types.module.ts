import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from "../../material/material.module";
import { TypesRoutingModule } from './types-routing.module';
import { TypesComponent } from './types/types.component';


@NgModule({
  declarations: [TypesComponent],
  imports: [
    CommonModule,
    TypesRoutingModule,
    MaterialModule
  ]
})
export class TypesModule { }
