import { Movie } from "../entities/Movie";

export interface IMovieProvider {
    retrieveByImdbId(id: string, plot:string): Promise<Movie | undefined>;
}