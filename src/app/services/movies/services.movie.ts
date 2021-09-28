import { HttpRequest } from "../../utils/httpRequest";

export class MovieServices {
  constructor() {}

  getMovies(url: string, credentialsKey:string, param: any) {
    const movies = HttpRequest.get(url, credentialsKey, param);
    return movies;
  }
}