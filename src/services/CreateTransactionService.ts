import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface CreateTransactionRequest {
  title: string;
  type: 'income' | 'outcome';
  value: number;
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({
    title,
    type,
    value,
  }: CreateTransactionRequest): Transaction {
    if (type === 'income') {
      const transaction = this.transactionsRepository.create({
        title,
        type,
        value,
      });

      return transaction;
    }

    if (type === 'outcome') {
      if (value > this.transactionsRepository.getBalance().total) {
        throw Error('You cannot withdraw more than you have');
      }

      const transaction = this.transactionsRepository.create({
        title,
        type,
        value,
      });

      return transaction;
    }

    throw Error('Invalid request.');
  }
}

export default CreateTransactionService;
