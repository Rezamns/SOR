import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})

export class OrderHistoryComponent {
  orderHistoryHeaderUrl = environment.orderHistoryHeaderConfigUrl;
  orderHistoryBaseUrl = '';
}