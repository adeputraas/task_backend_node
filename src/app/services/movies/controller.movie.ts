import { Request, Response, NextFunction } from "express";
import config from "../../config";
import { OMDbProvider, OMDbProviderTitle } from "./providers/OMDbProvider";
import { RetrieveMovieByImdbIdErrors } from "./use-cases/RetrieveMovieByImdbId/Errors";
import { RetrieveMovieByImdbIdUseCase } from "./use-cases/RetrieveMovieByImdbId/UseCase";
import { RetrieveMovieByImdbTitleErrors } from "./use-cases/RetrieveMovieByImdbTitle/Errors";
import { RetrieveMovieByImdbTitleUseCase } from "./use-cases/RetrieveMovieByImdbTitle/UseCase";

const omdbProvider = new OMDbProvider(config.urlMovies, config.credentialsKey);
const omdbProviderTitle = new OMDbProviderTitle(config.urlMovies, config.credentialsKey);

const retrieveMovieByImdbIdUseCase = new RetrieveMovieByImdbIdUseCase(omdbProvider);
const retrieveMovieByImdbTitleUseCase = new RetrieveMovieByImdbTitleUseCase(omdbProviderTitle);
export class MovieController {
  async getMovieById(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await retrieveMovieByImdbIdUseCase.execute({
        id: req.query.id as string,
        plot: req.query.plot as "short" | "full",
        response: req.query.response as "json" | "xml",
      });
      res.json(result.props);
    } catch (error) {
      if (error instanceof RetrieveMovieByImdbIdErrors.MovieNotFound) {
        return res.status(400).json(error.message);
      }
      next(error);
    }
  }

  async getMovieByTitle(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await retrieveMovieByImdbTitleUseCase.execute({
        title: req.query.title as string,
        year: Number(req.query.year) as number,
        plot: req.query.plot as "short" | "full",
        response: req.query.response as "json" | "xml",
      });
      res.json(result.props);
    } catch (error) {
      if (error instanceof RetrieveMovieByImdbTitleErrors.MovieNotFound) {
        return res.status(400).json(error.message);
      }
      next(error);
    }
  }
}
