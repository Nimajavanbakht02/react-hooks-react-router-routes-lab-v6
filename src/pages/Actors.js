import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";

function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/actors')
      .then(r => r.json())
      .then(data => setActors(data))
      .catch(error => console.error(error))
  }, [])

  const actorList = actors.map(actor => <Card key={actor.id} name={actor.name} movies={actor.movies} />)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorList}
      </main>
    </>
  );
};

export default Actors;