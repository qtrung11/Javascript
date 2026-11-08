import React from 'react'
import { useMovieContext } from '../../../contexts/movie-context'

function MovieTotal() {
  const { movies } = useMovieContext();
  return (
    <div>
      Total: {movies.length}
    </div>
  )
}

export default MovieTotal