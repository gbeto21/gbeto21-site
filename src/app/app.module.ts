import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';

import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from "./core/core.module";
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [GraphQLModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
