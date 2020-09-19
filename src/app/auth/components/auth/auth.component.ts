import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AuthService } from "../../../core/services/auth/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoading = false
  private authStatusStub: Subscription

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.authStatusStub = this.authService
      .getAuthStatusListener()
      .subscribe(
        authStatus => {
          this.isLoading = false
        }
      )
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return
    }
    this.isLoading = true
    this.authService.login(form.value.email, form.value.password)
  }

  ngOnDestroy() {
    this.authStatusStub.unsubscribe()
  }

}
