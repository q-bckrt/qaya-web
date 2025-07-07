import { CurrencyDto } from './currency.dto';
import { AccountDto } from './account.dto';
import { CategoryDto } from './category.dto';

export interface TransactionDto {
  id: string;
  title: string;
  description: string;
  type: 'INCOME' | 'EXPENSE' | 'TRANSFER' | 'ADJUSTMENT';
  category: CategoryDto;
  userId: string;
  amount: number;
  date: string;
  account: AccountDto;
  currency: CurrencyDto;
  createdAt: string;
}
