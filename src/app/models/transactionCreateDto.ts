export interface TransactionCreateDto {
  title: string;
  description: string;
  type: 'INCOME' | 'EXPENSE' | 'TRANSFER' | 'ADJUSTMENT';
  amount: string;
  categoryId: string;
  accountId: string;
  userId: string;
  date: string;
}
