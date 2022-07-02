const liblab_challenge = require('lotr_sdk');

liblab_challenge.getAllBooks().then((res) => {
  console.log(res);
});