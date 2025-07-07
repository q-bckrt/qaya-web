import { CurrencyDto} from './currency.dto';

export interface AccountDto {
  id: string;
  title: string;
  description: string;
  currency: CurrencyDto;
  allowOverdraft: boolean;
  iconKey: string;
  createdAt: string;
}
