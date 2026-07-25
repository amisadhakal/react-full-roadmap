import { useState } from "react";

const API_KEY = "";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      
    );

    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  return (
    <div>
      <h1>Movie Search</h1>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Movie"
      />

      <button onClick={getMovies}>
        Search
      </button>

      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <img src={movie.Poster} width="150" />
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
}

export default App;