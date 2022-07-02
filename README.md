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

## Using the NPM package

1. `npm install ???`
2. 