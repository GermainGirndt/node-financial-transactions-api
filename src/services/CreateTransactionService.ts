import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface CreateTransactionRequest {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({
    title,
    value,
    type,
  }: CreateTransactionRequest): Transaction {
    if (type === 'income') {
      const transaction = this.transactionsRepository.create({
        title,
        value,
        type,
      });

      return transaction;
    }

    if (type === 'outcome') {
      if (value > this.transactionsRepository.getBalance().total) {
        throw Error('You cannot withdraw more than you have');
      }

      const transaction = this.transactionsRepository.create({
        title,
        value,
        type,
      });

      return transaction;
    }

    throw Error('Invalid request.');
  }
}

export default CreateTransactionService;
