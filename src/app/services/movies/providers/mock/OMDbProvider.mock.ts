import { Movie } from "../../entities/Movie";
import { IMovieProviderById } from "../IMovieProvider";

export class OMDbProvider implements IMovieProviderById {
  constructor(private url: string, private credentialsKey: string) {}
  async retrieveByImdbId(id: string, plot:string): Promise<Movie | undefined> {
    try {
      if (id === "-99" || plot === "easy") {
        return undefined;
      }

      const response = {
        Title: "Batman & Mr. Freeze: SubZero",
        Year: "1998",
        Rated: "Unrated",
        Released: "17 Mar 1998",
        Runtime: "70 min",
        Genre: "Animation, Action, Crime, Drama, Sci-Fi, Thriller",
        Director: "Boyd Kirkland",
        Writer: "Randy Rogel, Boyd Kirkland, Bob Kane (created by: Batman)",
        Actors: "Kevin Conroy, Michael Ansara, Loren Lester, Efrem Zimbalist Jr.",
        Plot: "When Mr. Freeze, desperate to save his dying wife, kidnaps Barbara Gordon (Batgirl) as an involuntary organ donor, Batman and Robin must find her before the operation can begin.",
        Language: "English",
        Country: "USA",
        Awards: "1 win & 1 nomination.",
        Poster: "https://m.media-amazon.com/images/M/MV5BOTQ0NmUzMzAtODk5My00MzYwLThlYWEtY2NkOGNhODg5ZmY1XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
        Ratings: [
          {
            Source: "Internet Movie Database",
            Value: "7.2/10",
          },
          {
            Source: "Rotten Tomatoes",
            Value: "92%",
          },
        ],
        Metascore: "N/A",
        imdbRating: "7.2",
        imdbVotes: "14,445",
        imdbID: "tt0143127",
        Type: "movie",
        DVD: "23 Apr 2002",
        BoxOffice: "N/A",
        Production: "Warner Brothers/Seven Arts",
        Website: "N/A",
        Response: "True",
      };

      const movie = Movie.create(response);
      return movie;
    } catch (error) {
      return undefined;
    }
  }
}
