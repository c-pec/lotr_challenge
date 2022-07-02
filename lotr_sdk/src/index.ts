import axios from 'axios';
import { API_URL, auth_config } from './constant'; 


// BOOK ENDPOINTS -- DO NOT REQUIRE AUTH
export const getAllBooks = (): Promise<object> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/book`)
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
}

export const getBookById = (id: number): Promise<object>  => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/book/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
}

export const getBookChapters = (id: number): Promise<object>  => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/book/${id}/chapter`)
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
}

// MOVIE ENDPOINTS -- AUTH REQUIRED
export const getAllMovies = (): Promise<object> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/movie`, 
        auth_config)
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
}

export const getMovieById = (id: number): Promise<object>  => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/movie/${id}`, 
        auth_config)
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
}

export const getMovieQuotes = (id: number): Promise<object>  => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/movie/${id}/quote`,
        auth_config)
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
}

// CHARACTER ENDPOINTS -- AUTH REQUIRED
export const getAllCharacters = (): Promise<object> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/character`, 
        auth_config)
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
}

export const getCharacterById = (id: number): Promise<object>  => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/character/${id}`, 
        auth_config)
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
}

export const getCharacterQuotes = (id: number): Promise<object>  => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/character/${id}/quote`,
        auth_config)
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
}

// QUOTE ENDPOINTS -- AUTH REQUIRED
export const getAllQuotes = (): Promise<object> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/quote`, 
        auth_config)
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
}

export const getQuoteById = (id: number): Promise<object>  => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/quote/${id}`, 
        auth_config)
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
}

// QUOTE ENDPOINTS -- AUTH REQUIRED
export const getAllChapters = (): Promise<object> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/chapter`, 
        auth_config)
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
}

export const getChapterById = (id: number): Promise<object>  => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/chapter/${id}`, 
        auth_config)
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
}

export default { 
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
};
