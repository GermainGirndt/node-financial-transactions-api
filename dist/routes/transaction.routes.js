"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var TransactionsRepository_1 = __importDefault(require("../repositories/TransactionsRepository"));
var CreateTransactionService_1 = __importDefault(require("../services/CreateTransactionService"));
// import CreateTransactionService from '../services/CreateTransactionService';
var transactionRouter = express_1.Router();
var transactionsRepository = new TransactionsRepository_1.default();
transactionRouter.get('/', function (request, response) {
    try {
        var transactions = transactionsRepository.all().map(function (transaction) {
            return {
                id: transaction.id,
                title: transaction.title,
                type: transaction.type,
                value: transaction.value,
            };
        });
        var balance = transactionsRepository.getBalance();
        var returnedResponse = { transactions: transactions, balance: balance };
        return response.status(200).json(returnedResponse);
        // TODO
    }
    catch (err) {
        return response.status(400).json({ error: err.message });
    }
});
transactionRouter.post('/', function (request, response) {
    try {
        var _a = request.body, title = _a.title, type = _a.type, value = _a.value;
        var createTransaction = new CreateTransactionService_1.default(transactionsRepository);
        var newTransaction = createTransaction.execute({ title: title, type: type, value: value });
        var data = {
            id: newTransaction.id,
            title: newTransaction.title,
            type: newTransaction.type,
            value: newTransaction.value,
        };
        return response.status(200).json(data);
    }
    catch (err) {
        return response.status(400).json({ error: err.message });
    }
});
exports.default = transactionRouter;
