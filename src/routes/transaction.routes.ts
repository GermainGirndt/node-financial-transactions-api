import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
// import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    const transactions = transactionsRepository.all().map(transaction => {
      return {
        id: transaction.id,
        title: transaction.title,
        type: transaction.type,
        value: transaction.value,
      };
    });

    const balance = transactionsRepository.getBalance();

    const returnedResponse = { transactions, balance };

    return response.status(200).json(returnedResponse);

    // TODO
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const { title, type, value } = request.body;

    const createTransaction = new CreateTransactionService(
      transactionsRepository,
    );
    const newTransaction = createTransaction.execute({ title, type, value });

    const data = {
      id: newTransaction.id,
      title: newTransaction.title,
      type: newTransaction.type,
      value: newTransaction.value,
    };

    return response.status(200).json(data);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
