"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth_config = exports.API_URL = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const API_KEY = process.env.API_KEY || 'ujdWLqRzNrAS9LfjEcKw';
exports.API_URL = "https://the-one-api.dev/v2";
exports.auth_config = {
    headers: {
        'Authorization': 'Bearer ' + API_KEY,
    }
};
