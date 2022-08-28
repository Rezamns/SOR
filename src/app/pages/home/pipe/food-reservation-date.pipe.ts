import { Pipe, PipeTransform } from '@angular/core';
import { DATE } from '../enum/date';

@Pipe({
  name: 'foodReservationDate'
})
export class FoodReservationDatePipe implements PipeTransform {

  transform(date: string): string {
    switch (date) {
      case DATE.CURRENTWEEK:
        return 'هفته جاری';
      case DATE.NEXTWEEK:
        return 'هفته آینده';
    }
  }

}
