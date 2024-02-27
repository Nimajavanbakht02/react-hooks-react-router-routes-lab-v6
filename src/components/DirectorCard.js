import React from 'react'

function DirectorCard({director}) {
    return (
        <article>
            <h2>{director.name}</h2>
            <ul>
            {director.movies.map((movie) => {
                return <li key={movie}>{movie}</li>
            })}
            </ul>
        </article>
    )
}

export default DirectorCard