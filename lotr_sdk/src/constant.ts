import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.API_KEY || 'ujdWLqRzNrAS9LfjEcKw';

export const API_URL = "https://the-one-api.dev/v2";

export const auth_config = {
		headers: {
			'Authorization': 'Bearer ' + API_KEY,
		}
	};