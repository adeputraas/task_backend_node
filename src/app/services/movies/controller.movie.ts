import { Request, Response, NextFunction } from "express";
import knex from "knex";
import config from "../../config";
import { KnexUserActivityRepository } from "../users/repositories/implementations/KnexRepository/KnexUserActivityRepository";
import { userActivityMongooseModel } from "../users/repositories/implementations/MongooseRepository/models/UserActivityModelMongoose";
import { MongooseUserActivityRepository } from "../users/repositories/implementations/MongooseRepository/MongooseUserActivityRepository";
import { InsertUserActivityUseCase } from "../users/use-cases/InsertUserActivity/UseCase";
import { OMDbProvider, OMDbProviderTitle } from "./providers/OMDbProvider";
import { RetrieveMovieByImdbIdErrors } from "./use-cases/RetrieveMovieByImdbId/Errors";
import { RetrieveMovieByImdbIdUseCase } from "./use-cases/RetrieveMovieByImdbId/UseCase";
import { RetrieveMovieByImdbTitleErrors } from "./use-cases/RetrieveMovieByImdbTitle/Errors";
import { RetrieveMovieByImdbTitleUseCase } from "./use-cases/RetrieveMovieByImdbTitle/UseCase";

const omdbProvider = new OMDbProvider(config.urlMovies, config.credentialsKey);
const omdbProviderTitle = new OMDbProviderTitle(config.urlMovies, config.credentialsKey);

const retrieveMovieByImdbIdUseCase = new RetrieveMovieByImdbIdUseCase(omdbProvider);
const retrieveMovieByImdbTitleUseCase = new RetrieveMovieByImdbTitleUseCase(omdbProviderTitle);

const userActivityRepositoryKnex = new KnexUserActivityRepository(
  knex({
    client: config.postgresConnection.client,
    connection: {
      host: config.postgresConnection.host,
      port: config.postgresConnection.port,
      password: config.postgresConnection.password,
      database: config.postgresConnection.database,
      user: config.postgresConnection.user,
    },
  })
);

const userActivityRepositoryMongoose = new MongooseUserActivityRepository(userActivityMongooseModel);

const insertUserActivityUseCase = new InsertUserActivityUseCase(userActivityRepositoryKnex);

export class MovieController {
  async getMovieById(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await retrieveMovieByImdbIdUseCase.execute({
        id: req.query.id as string,
        plot: req.query.plot as "short" | "full",
        response: req.query.response as "json" | "xml",
      });

      await insertUserActivityUseCase.execute({
        dateTime: new Date(),
        endpoint: req.path,
        request: {
          title: result.props.Title,
        },
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

      await insertUserActivityUseCase.execute({
        dateTime: new Date(),
        endpoint: req.path,
        request: {
          title: result.props.Title,
        },
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
