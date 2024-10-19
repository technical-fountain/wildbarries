import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = localStorage.getItem('login') === 'true'; 

  if (isLoggedIn) {
    return true;
  } else {
    router.navigate(['/login']); 
    return false; 
  }
};
