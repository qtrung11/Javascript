import { MovieProvider } from "../../contexts/movie-context"
import MovieForm from "./components/movie-form"
import MovieList from "./components/movie-list"
import MovieTotal from "./components/movie-total"

function MovieFlim() {
  return (
    <div>
      <MovieProvider>
          <h1 className="text-3xl">Movie Flim</h1>

          <MovieForm />

          <MovieTotal />

          <MovieList />
      </MovieProvider>
    </div>
  )
}

export default MovieFlim