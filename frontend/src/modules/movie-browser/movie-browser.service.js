// WARNING: Don't check your actual API key into GitHub
// const MOVIE_DB_BASE_URL = 'http://localhost:5000/api'

const createMovieDbUrl = (relativeUrl, queryParams) => {
  let baseUrl = `${relativeUrl}?test=1`;
  // let baseUrl = `${MOVIE_DB_BASE_URL}${relativeUrl}?test=1`;
  if (queryParams) {
    Object.keys(queryParams)
      .forEach(paramName => baseUrl += `&${paramName}=${queryParams[paramName]}`);
  }
  return baseUrl;
}

// WARNING: Must pass parameters like this: ({param1, param2})
// for async action creator helper to work
export const getTopMovies = async ({page}) => {
  const fullUrl = createMovieDbUrl('/api/tvshows/discover/tv', {
    page
  });
  return fetch(fullUrl);
}

export const searchMovies = async ({ page, query}) => {
  const fullUrl = createMovieDbUrl('/api/search/movie', {
    page,
    query
  });
  return fetch(fullUrl);
}

export const getMovieDetails = async({movieId}) => {
  const fullUrl = createMovieDbUrl(`/api/tvshows/tv/${movieId}`);
  return fetch(fullUrl);
}
