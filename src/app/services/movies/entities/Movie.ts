import { z } from "zod";
import { PublicEntity } from "../../common/entities/PublicEntity";

export const RATING_SCHEMA = z.object({
  Source: z.string(),
  Value: z.string(),
});

export const MOVIE_SCHEMA = z.object({
  Title: z.string(),
  Year: z.string(),
  Rated: z.string(),
  Released: z.string(),
  Runtime: z.string(),
  Genre: z.string(),
  Director: z.string(),
  Writer: z.string(),
  Actors: z.string(),
  Plot: z.string(),
  Language: z.string(),
  Country: z.string(),
  Awards: z.string(),
  Poster: z.string(),
  Ratings: z.array(RATING_SCHEMA),
  Metascore: z.string(),
  imdbRating: z.string(),
  imdbVotes: z.string(),
  imdbID: z.string(),
  Type: z.string(),
  DVD: z.string(),
  BoxOffice: z.string(),
  Production: z.string(),
  Website: z.string(),
  Response: z.string(),
});

export type MovieProps = z.infer<typeof MOVIE_SCHEMA>;

export class Movie extends PublicEntity<MovieProps> {
  static create(props: MovieProps) {
    const movie = MOVIE_SCHEMA.parse(props);
    return new Movie(movie);
  }
}
