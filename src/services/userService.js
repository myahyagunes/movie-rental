import http from "./httpService";
import { movieRentalEndpoint } from "../config.json";

export function register(user) {
  return http.post(movieRentalEndpoint + "/users", {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
