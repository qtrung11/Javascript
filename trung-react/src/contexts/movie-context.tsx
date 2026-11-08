import React from 'react';

export interface IMovie {
  id: number,
  title: string
}


interface MovieContextProps {
  movies: IMovie[],
  addMovie: (title: string) => void,
  deleteMovie: (id: number) => void,
}

export const MovieContext = React.createContext<MovieContextProps>({
  movies: [],
  addMovie: () => {},
  deleteMovie: () => {}
});

export const MovieProvider = ({ children }: React.PropsWithChildren) => {
  const [movies, setMovies] = React.useState<IMovie[]>([])

  function addMovie(title: string) {
    const newMovie = {
      id: Date.now(),
      title: title + Date.now()
    }
    setMovies(prevState => [...prevState, newMovie])
  }

  function deleteMovie(id: number) {
    setMovies(prevState => prevState.filter(movie => movie.id !== id))
  }

  console.log('MovieProvider: ', movies)

  return (
    <MovieContext.Provider
      value={{
        movies,
        addMovie,
        deleteMovie
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}

export const useMovieContext = () => React.useContext(MovieContext);