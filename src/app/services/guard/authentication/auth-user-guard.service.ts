import {Injectable} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {CanActivate, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuardService implements CanActivate{

  constructor(private authService: AuthService , private router: Router) { }
  canActivate(): boolean {
    const token = this.authService.isLogin();
    if (token) return true;
    else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
