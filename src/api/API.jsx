import axios from "axios";

export const BASE_URL = "https://api.themoviedb.org/3/";
export const API_KEY = "&api_key=190e3ddab35543c052dfc663282a6055";

export const instanse = axios.create({
  baseURL: BASE_URL,
});

export const AdditionApi = {
  popular: "movie/popular?language=en-US",
  topRated: "movie/top_rated?language=en-US",
  Movies: (page) =>
    `discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
  Tv: (page) =>
    `discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc`,
  OneMovie: (id) => `movie/movie_${id}?language=en-US`,
  OneTv: (id) => `tv/series_${id}?language=en-US`,
};
