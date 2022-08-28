import { TestBed } from '@angular/core/testing';

import { FoodReservationService } from './food-reservation.service';

describe('FoodReservationService', () => {
  let service: FoodReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
