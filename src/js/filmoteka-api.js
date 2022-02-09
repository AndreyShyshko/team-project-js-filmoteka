import axios from 'axios';
const API_KEY = '219747bddc830c6768a55001e81d80ed';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export default class GetMoviesApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchTrendingMovies() {
    const options = {
      params: {
        api_key: API_KEY,
        page: this.page,
      },
    };

    const response = await axios.get('trending/movie/day', options);
    return await response.data;
  }

  async fetchGenres() {
    const options = {
      params: {
        api_key: API_KEY,
      },
    };

    const response = await axios.get('genre/movie/list?', options);
    return await response.data.genres;
  }

  async fetchMoviesByQuery() {
    const options = {
      params: {
        api_key: API_KEY,
        query: this.searchQuery,
        page: this.page,
      },
    };

    const response = await axios.get('search/movie?', options);
    return await response.data;
  }

  changePage(pageToMove) {
    this.page = pageToMove;
  }

  resetPage() {
    this.page = 1;
  }

  incrementPage() {
    this.page += 1;
  }

  decrementPage() {
    this.page -= 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
