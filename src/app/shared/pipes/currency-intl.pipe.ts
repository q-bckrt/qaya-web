import { Pipe, PipeTransform} from '@angular/core';
import  { formatCurrencyIntl} from '../util/currency-utils';

@Pipe({
  name: 'currencyIntl',
  standalone: true,
})
export class CurrencyIntlPipe implements PipeTransform {
  transform(value: number, currencyCode: string): string {
    if (value === null || value === undefined || isNaN(value)) {
      return '';
    }
    return formatCurrencyIntl(value, currencyCode);
  }
}
