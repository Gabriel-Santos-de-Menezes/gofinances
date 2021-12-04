export interface Props{
  data: TransactionCardProps;
}

export interface TransactionCardProps extends TransactionPropsStyles{
  title: string;
  amount: string;
  category: Category
  date: string;
}

export interface Category{
  name: string;
  icon: string;
}

export interface TransactionPropsStyles{
  type: 'positive' | 'negative';
}