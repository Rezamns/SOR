import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../../services/auth/auth.service';


@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    const token = this.authenticationService.isLogin();
    if (token) {
      headersConfig['Authorization'] = `Bearer ${token}`;
    }
    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }
}
