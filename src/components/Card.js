import React from 'react'

function Card({ name, movies }) {
    let actorMoviesList = movies.map((actor => <li key={actor.id}>{actor}</li>))
    return (
        <article>
            <h2>{name}</h2>
            <ul>
                {actorMoviesList}
            </ul>
        </article>
    );
};

export default Card