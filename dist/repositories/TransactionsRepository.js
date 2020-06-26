"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Transaction_1 = __importDefault(require("../models/Transaction"));
var TransactionsRepository = /** @class */ (function () {
    function TransactionsRepository() {
        this.transactions = [];
    }
    TransactionsRepository.prototype.all = function () {
        return this.transactions;
    };
    TransactionsRepository.prototype.getBalance = function () {
        var balance = { income: 0, outcome: 0, total: 0 };
        this.transactions.forEach(function (transaction) {
            if (transaction.type === 'income') {
                balance.income += transaction.value;
            }
            else {
                balance.outcome += transaction.value;
            }
        });
        balance.total = balance.income - balance.outcome;
        return balance;
    };
    TransactionsRepository.prototype.create = function (_a) {
        var title = _a.title, type = _a.type, value = _a.value;
        var transaction = new Transaction_1.default({ title: title, type: type, value: value });
        this.transactions.push(transaction);
        return transaction;
    };
    return TransactionsRepository;
}());
exports.default = TransactionsRepository;
