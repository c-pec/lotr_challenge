"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChapterById = exports.getAllChapters = exports.getQuoteById = exports.getAllQuotes = exports.getCharacterQuotes = exports.getCharacterById = exports.getAllCharacters = exports.getMovieQuotes = exports.getMovieById = exports.getAllMovies = exports.getBookChapters = exports.getBookById = exports.getAllBooks = void 0;
const axios_1 = __importDefault(require("axios"));
const constant_1 = require("./constant");
// BOOK ENDPOINTS -- DO NOT REQUIRE AUTH
const getAllBooks = () => {
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
const getBookById = (id) => {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${constant_1.API_URL}/book/${id}`)
            .then((res) => {
            resolve(res.data);
        })
            .catch(reject);
    });
};
exports.getBookById = getBookById;
const getBookChapters = (id) => {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${constant_1.API_URL}/book/${id}/chapter`)
            .then((res) => {
            resolve(res.data);
        })
            .catch(reject);
    });
};
exports.getBookChapters = getBookChapters;
// MOVIE ENDPOINTS -- AUTH REQUIRED
const getAllMovies = () => {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${constant_1.API_URL}/movie`, constant_1.auth_config)
            .then((res) => {
            resolve(res.data);
        })
            .catch(reject);
    });
};
exports.getAllMovies = getAllMovies;
const getMovieById = (id) => {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${constant_1.API_URL}/movie/${id}`, constant_1.auth_config)
            .then((res) => {
            resolve(res.data);
        })
            .catch(reject);
    });
};
exports.getMovieById = getMovieById;
const getMovieQuotes = (id) => {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${constant_1.API_URL}/movie/${id}/quote`, constant_1.auth_config)
            .then((res) => {
            resolve(res.data);
        })
            .catch(reject);
    });
};
exports.getMovieQuotes = getMovieQuotes;
// CHARACTER ENDPOINTS -- AUTH REQUIRED
const getAllCharacters = () => {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${constant_1.API_URL}/character`, constant_1.auth_config)
            .then((res) => {
            resolve(res.data);
        })
            .catch(reject);
    });
};
exports.getAllCharacters = getAllCharacters;
const getCharacterById = (id) => {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${constant_1.API_URL}/character/${id}`, constant_1.auth_config)
            .then((res) => {
            resolve(res.data);
        })
            .catch(reject);
    });
};
exports.getCharacterById = getCharacterById;
const getCharacterQuotes = (id) => {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${constant_1.API_URL}/character/${id}/quote`, constant_1.auth_config)
            .then((res) => {
            resolve(res.data);
        })
            .catch(reject);
    });
};
exports.getCharacterQuotes = getCharacterQuotes;
// QUOTE ENDPOINTS -- AUTH REQUIRED
const getAllQuotes = () => {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${constant_1.API_URL}/quote`, constant_1.auth_config)
            .then((res) => {
            resolve(res.data);
        })
            .catch(reject);
    });
};
exports.getAllQuotes = getAllQuotes;
const getQuoteById = (id) => {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${constant_1.API_URL}/quote/${id}`, constant_1.auth_config)
            .then((res) => {
            resolve(res.data);
        })
            .catch(reject);
    });
};
exports.getQuoteById = getQuoteById;
// QUOTE ENDPOINTS -- AUTH REQUIRED
const getAllChapters = () => {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${constant_1.API_URL}/chapter`, constant_1.auth_config)
            .then((res) => {
            resolve(res.data);
        })
            .catch(reject);
    });
};
exports.getAllChapters = getAllChapters;
const getChapterById = (id) => {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${constant_1.API_URL}/chapter/${id}`, constant_1.auth_config)
            .then((res) => {
            resolve(res.data);
        })
            .catch(reject);
    });
};
exports.getChapterById = getChapterById;
exports.default = {
    getAllBooks: exports.getAllBooks,
    getBookById: exports.getBookById,
    getBookChapters: exports.getBookChapters,
    getAllMovies: exports.getAllMovies,
    getMovieById: exports.getMovieById,
    getMovieQuotes: exports.getMovieQuotes,
    getAllCharacters: exports.getAllCharacters,
    getCharacterById: exports.getCharacterById,
    getCharacterQuotes: exports.getCharacterQuotes,
    getAllQuotes: exports.getAllQuotes,
    getQuoteById: exports.getQuoteById,
    getAllChapters: exports.getAllChapters,
    getChapterById: exports.getChapterById
};
