import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard"
import NavBar from "../components/NavBar";

function Home() {
  const [movieItems, setMovieItems] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then(r => r.json())
      .then(data => setMovieItems(data))
      .catch(error => console.error(error))
  }, [])



  const movieList = movieItems.map(movie => {
    return <MovieCard key={movie.id} title={movie.title} id={movie.id} />
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movieList}
      </main>
    </>
  );
};

export default Home;
