import axios from 'axios';
const KEY ='api_key=3bcb9c362d567dc87ce4f986b1e52bec';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const trendingMovies = () => {
    return axios
    .get('/3/trending/movie/day?api_key=${KEY}')
    .then((response) => ({
        total: response.data.total_reslts,
        result: response.data.result,
    }));
};
export const getGenres = () => {
    return axios
    .get('/3/genre/movie/list?api_key=${KEY}&language=en-US')
    .then((response) => {
        result: response.data.genres;
    });
};