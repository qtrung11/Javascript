import { useMovieContext } from "../../../contexts/movie-context"
import MoiveItem from "./movie-item";

function MovieList() {
  const { movies } = useMovieContext();
  return (
    <ul>
      {movies.map(movie => (
          <MoiveItem key={movie.id} movie={movie}/>
      ))}
    </ul>
  )
}

export default MovieList