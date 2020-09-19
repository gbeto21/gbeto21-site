import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from "../../../core/services/auth/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  private authListenerSubs: Subscription

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.logout()
  }

}
