import { TestBed } from '@angular/core/testing';

import { PrfileServiceService } from './profile-service.service';

describe('PrfileServiceService', () => {
  let service: PrfileServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrfileServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
