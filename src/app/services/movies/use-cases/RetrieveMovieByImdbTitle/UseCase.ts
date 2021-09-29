import { IMovieProviderByTitle } from "../../providers/IMovieProvider";
import { RetrieveMovieByImdbTitleDTO, RetrieveMovieByImdbTitleDTOSchema } from "./DTO";
import { RetrieveMovieByImdbTitleErrors } from "./Errors";

export class RetrieveMovieByImdbTitleUseCase {
  constructor(private movieProvider: IMovieProviderByTitle) {}

  public async execute(props: RetrieveMovieByImdbTitleDTO) {
    try {
      const dto = await RetrieveMovieByImdbTitleDTOSchema.parseAsync(props);
      const movie = await this.movieProvider.retrieveByTitle(dto.title, dto.year);

      if (!movie) {
        throw new RetrieveMovieByImdbTitleErrors.MovieNotFound(dto.title);
      }
      return movie;
    } catch (error) {
      throw error;
    }
  }
}
