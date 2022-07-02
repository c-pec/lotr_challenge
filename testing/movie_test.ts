const lotr_sdk = require('lotr_sdk');

lotr_sdk.getAllMovies().then((res) => {
  console.log("Get All Movies")
  console.log(res);
});

lotr_sdk.getMovieById("5cd95395de30eff6ebccde56").then((res) => {
  console.log("Get Movie By Id")
  console.log(res);
});

lotr_sdk.getMovieQuotes("5cd95395de30eff6ebccde56").then((res) => {
  console.log("Get Movie Quotes")
  console.log(res);
});