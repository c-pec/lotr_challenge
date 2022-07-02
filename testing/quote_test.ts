const lotr_sdk = require('lotr_sdk');

lotr_sdk.getAllQuotes().then((res) => {
  console.log("Get All Quotes")
  console.log(res);
});

lotr_sdk.getQuoteById("5cd96e05de30eff6ebcce84c").then((res) => {
  console.log("Get Quote By Id")
  console.log(res);
});