import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from '../../../../../environments/environment';


@Component({
  selector: 'app-daily-reports',
  templateUrl: './daily-reports.component.html',
  styleUrls: ['./daily-reports.component.scss']
})


export class DailyReportsComponent {
  addressHeaderConfigurationUrl = environment.addressHeaderConfigUrl;
  addressBaseUrl = '';
  resturantHeaderConfigurationUrl = environment.resturantHeaderConfigUrl;
  resturantBaseUrl = '';
}