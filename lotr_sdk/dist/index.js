"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBooks = void 0;
const axios_1 = __importDefault(require("axios"));
const constant_1 = require("./constant");
const getAllBooks = () => {
    // books endpoint does not require auth
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${constant_1.API_URL}/book`)
            .then((res) => {
            resolve(res.data);
        })
            .catch(reject);
    });
};
exports.getAllBooks = getAllBooks;
exports.default = { getAllBooks: exports.getAllBooks };
