import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-monthly-reports',
  templateUrl: './monthly-reports.component.html',
  styleUrls: ['./monthly-reports.component.scss']
})

export class MonthlyReportsComponent {
  finantioalHeaderConfigurationUrl = environment.monthlyReportsFinantioalHeaderConfigUrl;
  finantioalBaseUrl = '';
  checkReservationHeaderConfigurationUrl = environment.monthlyReportsCheckReservattionHeaderConfigUrl;
  checkReservationBaseUrl = '';
}