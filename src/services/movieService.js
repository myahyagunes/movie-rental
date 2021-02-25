import http from "./httpService";
import { movieRentalEndpoint } from "../config.json";

export function getMovies() {
  return http.get(movieRentalEndpoint + "/movies");
}

export function getMovie(id) {
  return http.get(movieRentalEndpoint + "/movies/" + id);
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieRentalEndpoint + "/movies/" + movie._id, body);
  }

  return http.post(movieRentalEndpoint + "/movies", movie);
}

export function deleteMovie(id) {
  return http.delete(movieRentalEndpoint + "/movies/" + id);
}
