import { HttpRequest } from "../../utils/httpRequest";

export class MovieServices {
  constructor() {}

  getMovies(url: string, credentialsKey:string, query: any) {
    const movies = HttpRequest.get(url, credentialsKey, query);
    return movies;
  }
}
