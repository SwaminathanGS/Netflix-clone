import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import API_KEY from './config';

function Comedy() {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
                );
                setFilms(response.data.results);
            } catch (error) {
                console.log(error);
            }
        };

        fetchFilms();
    }, []);

    return (
        <div>
            {films.map((film) => (
                <div key={film.id}>
                    <h2>{film.title}</h2>
                    <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} />
                    <p>Release Date: {film.release_date}</p>
                    <p>Rating: {film.vote_average}</p>
                </div>
            ))}
        </div>
    );
}
export default Comedy;