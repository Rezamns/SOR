import { TestBed } from '@angular/core/testing';

import { AddDateService } from './add-date.service';

describe('AddDateService', () => {
  let service: AddDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
