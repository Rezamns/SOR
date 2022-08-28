import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomPaginator, DataTableComponent} from './data-table.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSortModule} from "@angular/material/sort";
import {OpenDialog} from "../../openDialog";
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    DataTableComponent,
  ],
  exports: [
    DataTableComponent
  ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatTableModule,
        MatCheckboxModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatSortModule,
        MatIconModule,
        MatTabsModule
    ],
  providers: [
    { provide: MatPaginatorIntl, useValue: CustomPaginator() },
    OpenDialog
  ]
})
export class DataTableModule { }
