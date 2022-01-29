// import axios from 'axios';
// const API_KEY = '219747bddc830c6768a55001e81d80ed';
// axios.defaults.baseURL ='https://api.themoviedb.org/3/';
// function name() {
//   fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
//     .then(res => {
//       res.json();
//     })
//     .then(res => {
//       console.log(res);
//     });
// }
// name();




// const KEY ='api_key=3bcb9c362d567dc87ce4f986b1e52bec';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// export const trendingMovies = () => {
//     return axios
//     .get('/3/trending/movie/day?api_key=${KEY}')
//     .then((response) => ({
//         total: response.data.total_reslts,
//         result: response.data.result,
//     }));
// };
// export const getGenres = () => {
//     return axios
//     .get('/3/genre/movie/list?api_key=${KEY}&language=en-US')
//     .then((res) => {
//         console.log(res);
//     });
// };
