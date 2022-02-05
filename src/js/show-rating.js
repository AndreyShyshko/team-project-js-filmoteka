export function showRating(ratingsArray) {
  ratingsArray.forEach(rating => {
    rating.classList.remove('isHide');
  });
}
