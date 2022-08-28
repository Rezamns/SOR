import { Token } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { GetUserByContext } from '../../shared/models/auth/get-user-by-context';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './login.slider.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private auth: AuthService
  ) {
    this.loginForm = new FormGroup({
      Username: new FormControl('', [Validators.required, Validators.email, Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  onSubmit() {

    this.auth.login(this.loginForm.value).subscribe(
      () => {
        localStorage.setItem('userName', this.loginForm.get('Username').value);
        this.auth.getUserByContext().subscribe(
          () => {
            this.router.navigateByUrl('/home');
          }, error => {

          }
        );
      }, error => {

      }
    );
  }
}
