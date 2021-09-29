import { ZodError } from "zod";
import config from "../../../config";
import { OMDbProvider } from "../providers/mock/OMDbProvider.mock";
import { RetrieveMovieByImdbIdErrors } from "../use-cases/RetrieveMovieByImdbId/Errors";
import { RetrieveMovieByImdbIdUseCase } from "../use-cases/RetrieveMovieByImdbId/UseCase";

const omdbProvider = new OMDbProvider(config.urlMovies, config.credentialsKey);
const retrieveMovieByImdbIdUseCase = new RetrieveMovieByImdbIdUseCase(omdbProvider);

test("Get Movie By ID - Success", async () => {
  const result = await retrieveMovieByImdbIdUseCase.execute({
    id: "1",
    plot: "short" as "short" | "full",
    response: "json" as "json" | "xml",
  });
  expect(result.props).toBeTruthy();
});

test("Get Movie By ID - Error Provider ID", async () => {
  try {
    await retrieveMovieByImdbIdUseCase.execute({
      id: "-99",
      plot: "short" as "short" | "full",
      response: "json" as "json" | "xml",
    });
  } catch (error) {
    expect(error).toBeInstanceOf(RetrieveMovieByImdbIdErrors.MovieNotFound);
  }
});

test("Get Movie By ID - Error Validation Plot", async () => {
  try {
    await retrieveMovieByImdbIdUseCase.execute({
      id: "-99",
      plot: "easy" as "short" | "full",
      response: "json" as "json" | "xml",
    });
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }
});

test("Get Movie By ID - Error Validation ID", async () => {
  try {
    await retrieveMovieByImdbIdUseCase.execute({
      id: 1 as any,
      plot: "short" as "short" | "full",
      response: "json" as "json" | "xml",
    });
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }
});
