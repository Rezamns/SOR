import { TestBed } from '@angular/core/testing';

import { CustomerReportService } from './customer-report.service';

describe('CustomerReportService', () => {
  let service: CustomerReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
