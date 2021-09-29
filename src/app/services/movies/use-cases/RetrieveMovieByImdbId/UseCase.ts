import { logger } from "../../../../logger";
import { IMovieProvider } from "../../providers/IMovieProvider";
import { RetrieveMovieByImdbIdDTOSchema, RetrieveMovieByImdbIdDTO } from "./DTO";
import { RetrieveMovieByImdbIdErrors } from "./Errors";

export class RetrieveMovieByImdbIdUseCase {
  constructor(private movieProvider: IMovieProvider) {}

  public async execute(props: RetrieveMovieByImdbIdDTO) {
    try {
      logger.trace({}, "Sebelum Execute");
      const dto = await RetrieveMovieByImdbIdDTOSchema.parseAsync(props);
      const movie = await this.movieProvider.retrieveByImdbId(dto.id, dto.plot);
      logger.fatal({ movie }, "Data Movie");
      if (!movie) {
        throw new RetrieveMovieByImdbIdErrors.MovieNotFound(dto.id);
      }
      return movie;
    } catch (error) {
      throw error;
    }
  }
}
