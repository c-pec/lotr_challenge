const lotr_sdk = require('lotr_sdk');

lotr_sdk.getAllBooks().then((res) => {
  console.log("Get All Books")
  console.log(res);
});

lotr_sdk.getBookById("5cf58077b53e011a64671583").then((res) => {
  console.log("Get Book By Id")
  console.log(res);
});

lotr_sdk.getBookChapters("5cf58077b53e011a64671583").then((res) => {
  console.log("Get Book Chapters")
  console.log(res);
});