import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
// import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    const allTransactions = transactionsRepository.all();

    const balance = transactionsRepository.getBalance();

    return response.status(200).json({ allTransactions, balance });

    // TODO
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const { title, value, type } = request.body;

    const createTransaction = new CreateTransactionService(
      transactionsRepository,
    );
    const newTransaction = createTransaction.execute({ title, value, type });

    return response.status(200).json({ newTransaction });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
