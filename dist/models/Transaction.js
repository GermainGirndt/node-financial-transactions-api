"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuidv4_1 = require("uuidv4");
var Transaction = /** @class */ (function () {
    function Transaction(_a) {
        var title = _a.title, value = _a.value, type = _a.type;
        this.id = uuidv4_1.uuid();
        this.title = title;
        this.value = value;
        this.type = type;
    }
    return Transaction;
}());
exports.default = Transaction;
