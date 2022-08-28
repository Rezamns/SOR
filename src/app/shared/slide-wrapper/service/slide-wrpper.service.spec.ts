import { TestBed } from '@angular/core/testing';

import { SlideWrpperService } from './slide-wrpper.service';

describe('SlideWrpperService', () => {
  let service: SlideWrpperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlideWrpperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
