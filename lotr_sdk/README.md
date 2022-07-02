
## Using the NPM package

1. `npm install lotr_sdk`
2. Import to your project:
	`const lotr_sdk = require('lotr_sdk');`
3. You are reading to go! Get access to any of the following endpoints:

```
{ 
  getAllBooks, 
  getBookById, 
  getBookChapters, 
  getAllMovies, 
  getMovieById, 
  getMovieQuotes,
  getAllCharacters,
  getCharacterById,
  getCharacterQuotes,
  getAllQuotes,
  getQuoteById,
  getAllChapters,
  getChapterById
}
```
Example Usage: 
```
const lotr_sdk = require('lotr_sdk');

lotr_sdk.getAllCharacters().then((res) => {
  console.log("Get All Characters")
  console.log(res);
});
```

## LOCAL TESTING

1. Clone the repo

- `git clone git@github.com:c-pec/lotr_challenge.git`

2. Build the lotr_sdk project
- `cd ~/PATH/TO/liblab/lotr_sdk`
- `npm install`
- Obtain an API key by signing up [here](https://the-one-api.dev/sign-up)
- `touch .env`
- `echo "API_KEY=<your_key>" >> README.md`
- run `npm link` to prep for test setup below

3. Configure for testing
- `cd ~./PATH/TO/liblab/testing`
- `npm install`
- `npm link lotr_sdk`
- Run the test file: `node boot_test.js`
