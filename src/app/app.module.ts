import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from "@ngrx/store";
import { MatCarouselModule } from '@ngmodule/material-carousel';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from "./core/core.module";
import { AuthInterceptor } from './core/interceptors/auth-interceptor';
import * as fromApp from "./store/app.reducer";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from "./material/material.module";

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    MatCarouselModule.forRoot(),
    StoreModule.forRoot(
      fromApp.appReducer
    ),
    NgbModule,
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
