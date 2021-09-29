export namespace RetrieveMovieByImdbTitleErrors {
    export class MovieNotFound extends Error {
      constructor(title: string) {
        super(`Movie with Title ${title} was not found`);
      }
    }
  }
  