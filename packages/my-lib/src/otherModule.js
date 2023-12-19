"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circular3 = exports.circular1 = void 0;
var helpers_1 = require("@my-lib/helpers");
var circular1 = function () {
    return;
};
exports.circular1 = circular1;
var circular3 = function () {
    return helpers_1.default.circular4();
};
exports.circular3 = circular3;
exports.default = {
    circular1: exports.circular1,
    circular3: exports.circular3,
};
