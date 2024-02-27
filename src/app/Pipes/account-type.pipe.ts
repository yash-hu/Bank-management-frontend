import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accountType',
})
export class AccountTypePipe implements PipeTransform {
  transform(value: number): string {
    return value == 1 ? 'Savings' : 'Current';
  }
}
