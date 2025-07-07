export interface CategoryDto {
  id: string;
  label: string;
  description: string;
  type: 'INCOME' | 'EXPENSE';
  iconKey: string;
  userId: string;
  createdAt: string;
}
