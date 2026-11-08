import { useMovieContext } from "../../../contexts/movie-context"

function MoiveItem({ movie }: any) {
  const { deleteMovie } = useMovieContext();

  return (
    <li>Title: 
      {movie.title} 
      <button className="border" onClick={() => deleteMovie(movie.id)}>Delete</button>
    </li>
  )
}

export default MoiveItem