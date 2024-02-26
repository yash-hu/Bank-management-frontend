import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({
  name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {

  transform(date: Date): string {
    const locale = navigator.language || navigator.languages[0]; 
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  };
 return '';
  // Format the date using formatDate from Angular Common
  // return formatDate(date, 'medium', locale, options);
   
  }

}
