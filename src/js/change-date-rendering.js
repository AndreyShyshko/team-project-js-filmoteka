export function changeDateRendering(moviesArray) {
  moviesArray.forEach(({ release_date }) => {
    release_date = release_date.split('-')[0];
  });
}
