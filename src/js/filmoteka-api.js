import axios from 'axios';
const API_KEY = '219747bddc830c6768a55001e81d80ed';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export default class GetTrendingMoviesApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchMovies() {
    const options = {
      params: {
        api_key: API_KEY,
        q: this.searchQuery,
        page: this.page,
      },
    };

    const response = await axios.get('trending/movie/day', options);
    const trendingMoviesList = await response.data.results;
    //     this.incrementPage();
    return trendingMoviesList;
  }

  async fetchGenres() {
    const options = {
      params: {
        api_key: API_KEY,
      },
    };

    const response = await axios.get('genre/movie/list?', options);
    const genresList = await response.data.genres;
    return genresList;
  }
  //   incrementPage() {
  //     this.page += 1;
  //   }

  //   resetPage() {
  //     this.page = 1;
  //   }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}



