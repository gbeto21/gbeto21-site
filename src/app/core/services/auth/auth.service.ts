import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from "rxjs";
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

import * as fromApp from '../../../auth/store/auth.reducer'
import * as AuthActions from '../../../auth/store/auth.actions';

const URL = `${environment.apiUrl}/graphql`

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = ''
  private authStatusListener = new Subject<boolean>()

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store
  ) { }

  getToken() {
    return this.token
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable()
  }

  login(email: string, password: string) {

    return this.http
      .post<any>(URL, {
        "query": `query {login(email: "${email}",password:"${password}"){token}}`
      })
      .subscribe(response => {
        this.handleAutentication(response)
      }, error => {
        this.authStatusListener.next(false)
      })
  }

  logout() {
    this.store.dispatch(new AuthActions.Logout())
    this.router.navigate(['/login'])
    localStorage.removeItem('token')
  }

  private saveAuthData(
    token: string
  ) {
    localStorage.setItem('token', token)
  }

  private handleError(errorRes: HttpErrorResponse) {

    let errorMessage = 'An unkow error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This mail exist already';
        break;

      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;

      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
      default:
        break;
    }

    return throwError(errorMessage);

  }

  private handleAutentication(response) {

    const token = response.data.login.token
    this.token = token
    if (token) {
      this.store.dispatch(new AuthActions.AuthenticateSuccess({
        email: '',
        userId: '',
        token: token,
        expirationDate: null
      }))
      localStorage.setItem('token', this.token)
      this.saveAuthData(token)
      this.router.navigate(['/admin'])
    }
  }

}
