import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CustomerReport } from '../../shared/models/customer-report';

@Injectable({
  providedIn: 'root'
})
export class CustomerReportService {

  constructor(private http: HttpClient) { }

  getCustomerReport(): Observable <CustomerReport> { 
    return this.http.get<CustomerReport>(environment.customerReportUrl);
  }
}