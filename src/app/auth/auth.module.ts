import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from './components/auth/auth.component';
import { AuthRoutingModule } from "./auth-routing.module";
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
