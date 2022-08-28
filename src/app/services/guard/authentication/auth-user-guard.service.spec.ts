import { TestBed } from '@angular/core/testing';

import { AuthUserGuardService } from './auth-user-guard.service';

describe('AuthUserGuardService', () => {
  let service: AuthUserGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthUserGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
