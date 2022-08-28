import { Pipe, PipeTransform } from '@angular/core';
import { WEEK } from '../enum/week';

@Pipe({
  name: 'week'
})
export class WeekPipe implements PipeTransform {

  transform(day: string): string {
    switch (day) {
      case "saturday":
        return WEEK.SATURDAY;

      case "sunday":
        return WEEK.SUNDAY;

      case "monday":
        return WEEK.MONDAY;

      case "tuesday":
        return WEEK.TUESDAY;

      case "wednesday":
        return WEEK.WEDNESDAY;

      case "thursday":
        return WEEK.THURSDAY;

      case "friday":
        return WEEK.FRIDAY;
    }
  }

}
