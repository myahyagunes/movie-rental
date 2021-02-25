import http from "./httpService";
import { movieRentalEndpoint } from "../config.json";

export function getGenres() {
  return http.get(movieRentalEndpoint + "/genres");
}
