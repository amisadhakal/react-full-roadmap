import { useState } from "react";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${API_KEY}`
    );

    const data = await response.json();

    if (data.results) {
      setMovies(data.results);
    } else {
      setMovies([]);
    }
  };

  return (
    <div>
      <h1>Movie Search</h1>

      <input
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Movie"
      />

      <button onClick={getMovies}>
        Search
      </button>

      {movies.map((movie) => (
        <div key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            width="150"
          />
          <h2>{movie.title}</h2>
          <p>{movie.release_date}</p>
        </div>
      ))}
    </div>
  );
}

export default App;