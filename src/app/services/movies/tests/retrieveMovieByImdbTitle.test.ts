import { ZodError } from "zod";
import config from "../../../config";
import { OMDbProviderTitle } from "../providers/mock/OMDbProviderTitle.mock";
import { RetrieveMovieByImdbTitleErrors } from "../use-cases/RetrieveMovieByImdbTitle/Errors";
import { RetrieveMovieByImdbTitleUseCase } from "../use-cases/RetrieveMovieByImdbTitle/UseCase";

const omdbProviderTitle = new OMDbProviderTitle(config.urlMovies, config.credentialsKey);
const retrieveMovieByImdbTitleUseCase = new RetrieveMovieByImdbTitleUseCase(omdbProviderTitle);

test("Get Movie By Title - Success", async () => {
  const result = await retrieveMovieByImdbTitleUseCase.execute({
    title: "Batman",
    year: 1998,
    plot: "short" as "short" | "full",
    response: "json" as "json" | "xml",
  });
  expect(result.props).toBeTruthy();
});

test("Get Movie By Title - Error Provider Title", async () => {
  try {
    await retrieveMovieByImdbTitleUseCase.execute({
      title: "asdasfasdas",
      year: 1998,
      plot: "short" as "short" | "full",
      response: "json" as "json" | "xml",
    });
  } catch (error) {
    expect(error).toBeInstanceOf(RetrieveMovieByImdbTitleErrors.MovieNotFound);
  }
});

test("Get Movie By Title - Error Validation Title", async () => {
  try {
    await retrieveMovieByImdbTitleUseCase.execute({
      title: 1 as any,
      year: null as any,
      plot: "short" as "short" | "full",
      response: "json" as "json" | "xml",
    });
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }
});

test("Get Movie By Title - Error Validation Year", async () => {
  try {
    await retrieveMovieByImdbTitleUseCase.execute({
      title: "Batman",
      year: null as any,
      plot: "short" as "short" | "full",
      response: "json" as "json" | "xml",
    });
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }
});
