import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import API_KEY from './config';

function FirstPage() {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
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




// const [data, setData] = useState([]);

// useEffect(() => {
//     axios.get('https://catfact.ninja/fact')
//         .then(response => {
//             console.log(response);
//             setData(response.data);
//         })
//         .catch(error => {
//             console.error(error);
//         });
// }, []);

// const handleNextClick = () => {
//     window.location.reload();
// };



// return (
//     <div>
//         <label> <b>Fact about Cats: </b></label>
//         <br />
//         <label>{(data.fact)}</label>
//         <br />
//         <button onClick={handleNextClick}>Next</button>
//     </div >

// );

export default FirstPage;