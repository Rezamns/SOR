import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { AddFoodComponent } from './pages/Admin/add-food/add-food.component';
import { AddMenuComponent } from './pages/Admin/add-menu/add-menu.component';
import { SettingComponent } from './pages/Admin/setting/setting.component';
import { AddDateComponent } from './pages/Admin/add-date/add-date.component';
import { AuthUserGuardService } from "./services/guard/authentication/auth-user-guard.service";
import { AuthAdminGuardService } from "./services/guard/authentication/auth-admin-guard.service";
import { NotFoundComponent } from './pages/404/not-found.component';
import { EditProfileComponent } from './pages/profile/edit-profile/edit-profile.component';
import { OrderHistoryComponent } from './pages/home/order-history/order-history.component';
import { MonthlyReportsComponent } from './pages/Admin/reports/monthly-reports/monthly-reports.component';
import { DailyReportsComponent } from './pages/Admin/reports/daily-reports/daily-reports.component';

const routes: Routes = [] = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "home", component: HomeComponent, canActivate: [AuthUserGuardService] },
  { path: "profile", 
    loadChildren: () => import('./pages/profile/profile.module').then(module => module.ProfileModule),
    canActivate: [AuthUserGuardService] 
  },
  { path: "add-food", component: AddFoodComponent, canActivate: [AuthAdminGuardService] },
  { path: "add-menu", component: AddMenuComponent, canActivate: [AuthAdminGuardService] },
  { path: "setting", component: SettingComponent, canActivate: [AuthAdminGuardService] },
  { path: "add-date", component: AddDateComponent, canActivate: [AuthAdminGuardService] },
  { path: "order-history", component: OrderHistoryComponent, canActivate: [AuthUserGuardService] },
  { path: "Dreports", component: DailyReportsComponent, canActivate: [AuthAdminGuardService] },
  { path: "Mreports", component: MonthlyReportsComponent, canActivate: [AuthAdminGuardService] },
  { path: "login", component: LoginComponent },
  { path: '**', component: NotFoundComponent }
]

AuthUserGuardService
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
