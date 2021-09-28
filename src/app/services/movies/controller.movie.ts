import { Request, Response, NextFunction } from "express";
import { MovieServices } from "./services.movie";
import config from "../../config";
import { ValidatorMovie } from "./validator.movie";

const services = new MovieServices();
const validator = new ValidatorMovie();

export class MovieController {
    // TODO: CHECK VALIDATOR BELOM DI TESTING
  async getMovie(req: Request, res: Response, next: NextFunction) {
    try {
      const isValid = await validator.validateMovie(req.params);
      console.log(isValid)
      const result = await services.getMovies(config.urlMovies, config.credentialsKey, req.params);
      res.json([]);
    } catch (error) {
      next(error);
    }
  }

  async getDetailMovie(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await services.getMovies(config.urlMovies, config.credentialsKey, req.params);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}
