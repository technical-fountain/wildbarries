import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = localStorage.getItem('loggedIn')
    if (isLoggedIn == 'false' || !isLoggedIn) {
      this.router.navigate(['/login'])
    }
    return (isLoggedIn == 'true')
  }
}
