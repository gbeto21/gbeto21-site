import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class SharedModule { }
