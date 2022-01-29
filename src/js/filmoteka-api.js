import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export default class GetTrendingMoviesApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchMovies() {
    const options = {
      params: {
        api_key: '219747bddc830c6768a55001e81d80ed',
        q: this.searchQuery,
        page: this.page,
      },
    };

    const response = await axios.get('trending/movie/day', options);
    const trendingMoviesData = await response.data;
    const trendingMoviesList = await trendingMoviesData.results;
    //     this.incrementPage();
    return trendingMoviesList;
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
