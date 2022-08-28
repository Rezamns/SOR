import { TestBed } from '@angular/core/testing';

import { AuthAdminGuardService } from './auth-admin-guard.service';

describe('AuthAdminGuardService', () => {
  let service: AuthAdminGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthAdminGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
