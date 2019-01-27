// List of movie modal action type keys
export const keys = {
  'OPEN_MOVIE_MODAL': 'OPEN_MOVIE_MODAL',
  'CLOSE_MOVIE_MODAL': 'CLOSE_MOVIE_MODAL',
  'OPEN_SEASON_DETAIL': 'OPEN_SEASON_DETAIL'
}

// Opens the <MovieModal /> with a movieId
export const openMovieModal = (movieId) => {
  return {
    type: keys.OPEN_MOVIE_MODAL,
    movieId
  };
}

// Closes the <MovieModal />
export const closeMovieModal = () => {
  return {
    type: keys.CLOSE_MOVIE_MODAL
  };
}

// open Season Detail with season
export const openSeasonDetail = (movieId, seasonId) => {
  return {
    type: keys.OPEN_SEASON_DETAIL,
    movieId,
    seasonId
  };
}
