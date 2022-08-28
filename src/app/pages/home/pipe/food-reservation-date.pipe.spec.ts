import { FoodReservationDatePipe } from './food-reservation-date.pipe';

describe('FoodReservationDatePipe', () => {
  it('create an instance', () => {
    const pipe = new FoodReservationDatePipe();
    expect(pipe).toBeTruthy();
  });
});
