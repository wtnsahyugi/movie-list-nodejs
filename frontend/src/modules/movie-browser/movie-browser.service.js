// WARNING: Don't check your actual API key into GitHub
// import {MOVIE_DB_API_KEY} from '../../api-keys';
// const MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3';
const MOVIE_DB_BASE_URL = 'http://localhost:5000/api'

const createMovieDbUrl = (relativeUrl, queryParams) => {
  // let baseUrl = `${MOVIE_DB_BASE_URL}${relativeUrl}?api_key=bb11e63899b98af0b998882e7b4c58ff&language=en-US`;
  let baseUrl = `${MOVIE_DB_BASE_URL}${relativeUrl}?test=1`;
  if (queryParams) {
    Object.keys(queryParams)
      .forEach(paramName => baseUrl += `&${paramName}=${queryParams[paramName]}`);
  }
  return baseUrl;
}

// WARNING: Must pass parameters like this: ({param1, param2})
// for async action creator helper to work
export const getTopMovies = async ({page}) => {
  const fullUrl = createMovieDbUrl('/tvshows/discover/tv', {
    page
  });
  return fetch(fullUrl);
}

export const searchMovies = async ({ page, query}) => {
  const fullUrl = createMovieDbUrl('/search/movie', {
    page,
    query
  });
  return fetch(fullUrl);
}

export const getMovieDetails = async({movieId}) => {
  const fullUrl = createMovieDbUrl(`/tvshows/tv/${movieId}`);
  return fetch(fullUrl);
}
