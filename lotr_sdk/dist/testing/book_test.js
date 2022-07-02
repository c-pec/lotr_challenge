"use strict";
const liblab_challenge = require('liblab_challenge');
liblab_challenge.getAllBooks().then((res) => {
    console.log(res);
});
