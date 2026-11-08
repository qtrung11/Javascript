import React from "react";
import { useMovieContext } from "../../../contexts/movie-context"

function MovieForm() {
  const [title, setTitle] = React.useState('');
  const { addMovie } = useMovieContext();

  function _addTitle() {
    setTitle('');
    addMovie(title)
  }

  return (
    <div>
      Title: <input value={title} onChange={e => setTitle(e.target.value)} />
      <button className="cursor-pointer border" onClick={_addTitle}>Add Movie</button>
    </div>
  )
}

export default MovieForm