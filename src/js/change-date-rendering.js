export function changeDateRendering(moviesArray) {
  moviesArray.forEach(movie => {
    movie.release_date = movie.release_date.split('-').splice(0, 1);
  });
}
