import { useState } from "react";

import { useMovies } from "../Hooks/useMovies";
import { ListOfMovies } from "./ListOfMovies";


function RenderNoResults() {
  return <p>No hay peliculas</p>;
}

export function Movies() {
  const {movies} = useMovies();
  const hasMovies = movies?.length > 0;

  return (
    <div>
      <h1>Aqui estaran las peliculas</h1>
      {hasMovies ? <ListOfMovies movies={movies}/> : <RenderNoResults />}
    </div>
  );
}
