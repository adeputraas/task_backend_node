import { Movie } from "../entities/Movie";

export interface IMovieProviderById {
    retrieveByImdbId(id: string, plot:string): Promise<Movie | undefined>;
}

export interface IMovieProviderByTitle {
    retrieveByTitle(title:string, year:number): Promise<Movie | undefined>;
}