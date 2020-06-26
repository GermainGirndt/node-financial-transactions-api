"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateTransactionService = /** @class */ (function () {
    function CreateTransactionService(transactionsRepository) {
        this.transactionsRepository = transactionsRepository;
    }
    CreateTransactionService.prototype.execute = function (_a) {
        var title = _a.title, type = _a.type, value = _a.value;
        if (type === 'income') {
            var transaction = this.transactionsRepository.create({
                title: title,
                type: type,
                value: value,
            });
            return transaction;
        }
        if (type === 'outcome') {
            if (value > this.transactionsRepository.getBalance().total) {
                throw Error('You cannot withdraw more than you have');
            }
            var transaction = this.transactionsRepository.create({
                title: title,
                type: type,
                value: value,
            });
            return transaction;
        }
        throw Error('Invalid request.');
    };
    return CreateTransactionService;
}());
exports.default = CreateTransactionService;
