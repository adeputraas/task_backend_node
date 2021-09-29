import axios from "axios";
import { Movie } from "../entities/Movie";
import { IMovieProvider } from "./IMovieProvider";

export class OMDbProvider implements IMovieProvider {
  constructor(private url: string, private credentialsKey: string) {}
  async retrieveByImdbId(id: string, plot: string): Promise<Movie | undefined> {
    try {
      const response = await axios.get(`${this.url}/?apikey=${this.credentialsKey}&i=${id}&plot=${plot}`).then((response) => response.data);
      if (response?.Response === "False") {
        return undefined;
      }
      const movie = Movie.create(response);
      return movie;
    } catch (error) {
      return undefined;
    }
  }
}
