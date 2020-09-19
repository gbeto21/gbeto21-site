import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map, tap, take } from 'rxjs/operators';
import { AuthService } from './core/services/auth/auth.service';
import * as fromApp from './store/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select('auth')
      .pipe(
        take(1),
        map(
          authState => {
            return authState.user
          }
        ),
        map(user => {
          const isAuth = !!user
          if (isAuth) {
            return true
          }
          return this.router.createUrlTree(['/login'])
        })
      )
  }

}
