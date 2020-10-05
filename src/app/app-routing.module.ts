import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AdminGuard } from "./admin.guard";
import { HomeComponent } from "./home/home.component";
import { PreloadService } from "./core/services/preload/preload.service";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { preload: true }
  },
  {
    path: 'about',
    loadChildren: () => import("./about/about.module").then(m => m.AboutModule),
    data: { preload: true }
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule),
    data: { preload: true }
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule),
    data: { preload: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules
    preloadingStrategy: PreloadService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
