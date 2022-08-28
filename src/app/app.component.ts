import { Component, OnInit } from '@angular/core';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';
import { AuthService } from "./services/auth/auth.service";

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 1000,
  hideDelay: 1000,
  touchendHideDelay: 1000,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{ provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }]
})

export class AppComponent implements OnInit {
  isAdmin: boolean;


  constructor(private authService: AuthService) { }


  ngOnInit(): void {

    this.isAdmin = (this.authService.isAdmin() === 'true');
  }

  onLogOut() {
    this.authService.logout();
  }
}
