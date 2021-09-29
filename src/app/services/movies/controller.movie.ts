import { Request, Response, NextFunction } from "express";
import config from "../../config";
import { OMDbProvider } from "./providers/OMDbProvider";
import { RetrieveMovieByImdbIdErrors } from "./use-cases/RetrieveMovieByImdbId/Errors";
import { RetrieveMovieByImdbIdUseCase } from "./use-cases/RetrieveMovieByImdbId/UseCase";

const omdbProvider = new OMDbProvider(config.urlMovies, config.credentialsKey);

const retrieveMovieByImdbIdUseCase = new RetrieveMovieByImdbIdUseCase(omdbProvider);
export class MovieController {
  // TODO: CHECK VALIDATOR BELOM DI TESTING
  async getMovieById(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await retrieveMovieByImdbIdUseCase.execute({
        id: req.query.id as string,
        plot: req.query.plot as "short" | "full",
        response: req.query.response as "json" | "xml",
      });
      res.json(result.props);
    } catch (error) {
      if(error instanceof RetrieveMovieByImdbIdErrors.MovieNotFound){
        return res.status(400).json(error.message);
      }
      next(error);
    }
  }
}
