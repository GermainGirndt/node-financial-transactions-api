"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuidv4_1 = require("uuidv4");
var Transaction = /** @class */ (function () {
    function Transaction(_a) {
        var title = _a.title, type = _a.type, value = _a.value;
        this.id = uuidv4_1.uuid();
        this.title = title;
        this.type = type;
        this.value = value;
    }
    return Transaction;
}());
exports.default = Transaction;
