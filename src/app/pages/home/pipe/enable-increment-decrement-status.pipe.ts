import { Pipe, PipeTransform } from '@angular/core';
import { DATE } from '../enum/date';

@Pipe({
  name: 'enableIncrementDecrementStatus'
})
export class EnableIncrementDecrementStatusPipe implements PipeTransform {

  transform(status): boolean {
    switch (status) {
      case DATE.CURRENTWEEK:
        return true;
      case DATE.NEXTWEEK:
        return true;
    }
  }
}