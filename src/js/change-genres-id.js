import GetMoviesApi from './filmoteka-api.js';

const GetGenres = new GetMoviesApi();
let genresDatabase = [];

GetGenres.fetchGenres()
  .then(genresArray => {
    for (const genreObj of genresArray) {
      genresDatabase.push(genreObj);
    }
  })
  .catch(error => {
    console.log(error);
  });

export function changeGenreIdToName(moviesArray) {
  cropGenresList(moviesArray);
  moviesArray.forEach(({ genre_ids }) => {
    genresDatabase.map(({ id, name }) => {
      for (let i = 0; i < genre_ids.length; i++) {
        if (genre_ids[i] == id) {
          genre_ids[i] = name;
        }
      }
    });
  });
}

function cropGenresList(moviesArray) {
  moviesArray.forEach(({ genre_ids }) => {
    if (genre_ids.length > 2) {
      genre_ids.splice(2, genre_ids.length - 2, 'Other');
    }
  });
}
