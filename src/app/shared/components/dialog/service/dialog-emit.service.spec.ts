import { TestBed } from '@angular/core/testing';

import { DialogEmitService } from './dialog-emit.service';

describe('DialogEmitService', () => {
  let service: DialogEmitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogEmitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
