function ListOfMovies({movies}) {
    return (
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <h3>{movie.year}</h3>
            <img src={movie.poster} alt={movie.Title}></img>
          </li>
        ))}
      </ul>
    );
  }

  export { ListOfMovies }