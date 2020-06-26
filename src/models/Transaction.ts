import { uuid } from 'uuidv4';

class Transaction {
  id: string;

  title: string;

  value: number;

  type: 'income' | 'outcome';

  constructor({ title, type, value }: Omit<Transaction, 'id'>) {
    this.id = uuid();
    this.title = title;
    this.type = type;
    this.value = value;
  }
}

export default Transaction;
