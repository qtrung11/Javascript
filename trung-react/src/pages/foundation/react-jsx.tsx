import React from 'react';
import { useMovieContext } from '../../contexts/movie-context';

export function ReactJsx() {
  const movie = useMovieContext();
  const expressionSum = <h1>this is sum: {2 + 2}</h1>;


  console.log('context: ', movie)

  return (
    <div>
      ExpressionSum: {expressionSum}
    </div>
  )
};

export default ReactJsx;