import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Login} from '../../shared/models/Login';
import {tap} from 'rxjs/operators';
import {LoginResponse} from '../../shared/models/auth/loginResponse';
import {GetUserByContext} from '../../shared/models/auth/get-user-by-context';
import {ProfileModel} from '../../shared/models/profile/profile-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUrl = `${environment.accountUrl}login`;
  isAdminSubject: Subject<boolean> = new Subject();
  constructor(
    private http: HttpClient
  ) {
  }

  login(userInfo: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.loginUrl, userInfo).pipe(
      tap(
        (response: LoginResponse) => {
          localStorage.setItem('userToken', response.access_token);
          localStorage.setItem('isAdmin', `${response.isAdmin}`);
        }, (error) => {
          console.log(error);
        }
      )
    );
  }

  isLogin(): string {
    return localStorage.getItem('userToken');
  }

  isAdmin(): string {
    return localStorage.getItem('isAdmin');
  }

  getUserByContext(): Observable<GetUserByContext> {
    return this.http.get<GetUserByContext>(environment.getUserByContextUrl).pipe(
      tap((userInfo: GetUserByContext) => {
        this.isAdminSubject.next(userInfo.IsAdmin);
      })
    );
  }
  // getEditableProfileResponse(userName: string): Observable<ProfileModel> {
  //   return this.http.post<ProfileModel>(environment., userName);
  // }
  logout() {
    localStorage.clear();
  }
}
