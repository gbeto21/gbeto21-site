import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuicklinkModule } from "ngx-quicklink";

import { MaterialModule } from "./../material/material.module";
import { AdminRoutingModule } from './admin-routing.module';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    QuicklinkModule
  ]
})
export class AdminModule { }
