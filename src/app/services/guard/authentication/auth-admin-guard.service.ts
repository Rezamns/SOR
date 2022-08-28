import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuardService implements CanActivate{

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }
  canActivate(): boolean {
    if (this.authService.isAdmin() === 'true') {
      return true
    } else {
       this.router.navigateByUrl('/login');
    }
  }
}
