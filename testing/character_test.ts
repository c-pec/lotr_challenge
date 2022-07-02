const lotr_sdk = require('lotr_sdk');

lotr_sdk.getAllCharacters().then((res) => {
  console.log("Get All Characters")
  console.log(res);
});

lotr_sdk.getCharacterById("5cd99d4bde30eff6ebccfbfe").then((res) => {
  console.log("Get Character By Id")
  console.log(res);
});

lotr_sdk.getCharacterQuotes("5cd99d4bde30eff6ebccfbfe").then((res) => {
  console.log("Get Character Quotes")
  console.log(res);
});