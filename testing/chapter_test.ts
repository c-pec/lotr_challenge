const lotr_sdk = require('lotr_sdk');

lotr_sdk.getAllChapters().then((res) => {
  console.log("Get All Chapters")
  console.log(res);
});

lotr_sdk.getChapterById("6091b6d6d58360f988133bc8").then((res) => {
  console.log("Get Chapter By Id")
  console.log(res);
});