import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DataService } from './services/food-actions.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTreeModule } from '@angular/material/tree';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { LoginComponent } from './pages/login/login.component';
import { SettingComponent } from './pages/Admin/setting/setting.component';
import { AppComponent } from './app.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { AddFoodComponent } from './pages/Admin/add-food/add-food.component';
import { AddMenuComponent } from './pages/Admin/add-menu/add-menu.component';

import { WeekPipe } from './pages/home/pipe/week.pipe';
import { FoodReservationDatePipe } from './pages/home/pipe/food-reservation-date.pipe';
import { EnableIncrementDecrementStatusPipe } from './pages/home/pipe/enable-increment-decrement-status.pipe';

import { AddDateComponent } from './pages/Admin/add-date/add-date.component';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HttpTokenInterceptor } from './shared/interceptor/http-token-interceptor.service';
import { NotFoundComponent } from './pages/404/not-found.component';
import { EditProfileComponent } from './pages/profile/edit-profile/edit-profile.component';
import { DataTableModule } from "./shared/components/data-table/data-table.module";
import { MatSelectModule } from "@angular/material/select";
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { AddEditFoodComponent } from './pages/Admin/add-food/add-edit-food/add-edit-food.component';
import { SlideWrapperModule } from "./shared/slide-wrapper/slide-wrapper.module";
import { MainSidebarComponent } from './shared/components/main-sidebar/main-sidebar.component';
import { MainToolbarComponent } from './shared/components/main-toolbar/main-toolbar.component';
import { AddEditDateComponent } from './pages/Admin/add-date/add-edit-date/add-edit-date.component';
import { AddEditMenuComponent } from './pages/Admin/add-menu/add-edit-menu/add-edit-menu.component';
import { MonthlyReportsComponent } from './pages/Admin/reports/monthly-reports/monthly-reports.component';
import { DailyReportsComponent } from './pages/Admin/reports/daily-reports/daily-reports.component';
import { OrderHistoryComponent } from './pages/home/order-history/order-history.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProfileComponent,
        AddMenuComponent,
        AddFoodComponent,
        LoginComponent,
        SettingComponent,
        WeekPipe,
        FoodReservationDatePipe,
        EnableIncrementDecrementStatusPipe,
        AddDateComponent,
        NotFoundComponent,
        EditProfileComponent,
        DialogComponent,
        AddEditFoodComponent,
        MainSidebarComponent,
        MainToolbarComponent,
        AddEditDateComponent,
        AddEditMenuComponent,
        MonthlyReportsComponent,
        DailyReportsComponent,
        OrderHistoryComponent
    ],
    imports: [
        BrowserModule,
        MatSlideToggleModule,
        MatCheckboxModule,
        MatSortModule,
        BrowserAnimationsModule,
        MatMenuModule,
        HttpClientModule,
        MatDialogModule,
        MatStepperModule,
        MatDividerModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        MatListModule,
        MatFormFieldModule,
        MatCardModule,
        MatExpansionModule,
        MatTreeModule,
        MatTooltipModule,
        MatTabsModule,
        MatSidenavModule,
        MatIconModule,
        MatChipsModule,
        MatSortModule,
        MatTableModule,
        MatToolbarModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MatButtonToggleModule,
        DataTableModule,
        MatSelectModule,
        SlideWrapperModule
    ],
    providers: [
        DataService,
        { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
