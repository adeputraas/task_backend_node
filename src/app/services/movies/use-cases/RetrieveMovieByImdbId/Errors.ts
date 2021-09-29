export namespace RetrieveMovieByImdbIdErrors {
  export class MovieNotFound extends Error {
    constructor(id: string) {
      super(`Movie with IMDB Id ${id} was not found`);
    }
  }
}
