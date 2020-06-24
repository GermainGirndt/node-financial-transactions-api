"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
// import TransactionsRepository from '../repositories/TransactionsRepository';
// import CreateTransactionService from '../services/CreateTransactionService';
var transactionRouter = express_1.Router();
// const transactionsRepository = new TransactionsRepository();
transactionRouter.get('/', function (request, response) {
    try {
        // TODO
    }
    catch (err) {
        return response.status(400).json({ error: err.message });
    }
});
transactionRouter.post('/', function (request, response) {
    try {
        // TODO
    }
    catch (err) {
        return response.status(400).json({ error: err.message });
    }
});
exports.default = transactionRouter;
