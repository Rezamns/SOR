import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataTableItems'
})
export class DataTableItemsPipe implements PipeTransform {

  transform(items: any , headerName: string): string {
    return items[headerName];
  }

}
