export interface Props extends TypeProps{
  title: string;
  amount: string;
  lastTransaction: string;
}

export interface TypeProps {
  type: 'up' | 'down' | 'total';
}