import axios from "axios";
import { Movie } from "../entities/Movie";
import { IMovieProviderById, IMovieProviderByTitle } from "./IMovieProvider";

export class OMDbProvider implements IMovieProviderById {
  constructor(private url: string, private credentialsKey: string) {}
  async retrieveByImdbId(id: string, plot: string): Promise<Movie | undefined> {
    try {
      const response = await axios.get(`${this.url}/?apikey=${this.credentialsKey}&i=${id}&plot=${plot}&r=json`).then((response) => response.data);
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

export class OMDbProviderTitle implements IMovieProviderByTitle {
  constructor(private url: string, private credentialsKey: string) {}
  async retrieveByTitle(title: string, year: number): Promise<Movie | undefined> {
    try {
      const response = await axios.get(`${this.url}/?apikey=${this.credentialsKey}&t=${title}&y=${year}&r=json`).then((response) => response.data);
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
