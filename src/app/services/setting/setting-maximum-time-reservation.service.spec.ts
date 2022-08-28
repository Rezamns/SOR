import { TestBed } from '@angular/core/testing';

import { SettingMiximumTimeReservationService } from './setting-maximum-time-reservation.service';

describe('SettingMiximumTimeReservationService', () => {
  let service: SettingMiximumTimeReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingMiximumTimeReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
