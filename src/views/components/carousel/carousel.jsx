import React from 'react';

function Carousel({ items }) {
    return (
        <div className="horizontal-movie-scroller">
            {items.map((item) => (
                <div key={item.id} className="movie-card">
                    <div className='container px-4 border border-danger border-2'>
                        {/* <h3 className='text-white'>{film.title}</h3> */}
                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} height='300px' />
                        <p className='text-white'><b>Release Date: {item.release_date}</b></p>
                        <p className='text-white'><b>Rating: {item.vote_average}</b></p>

                    </div>
                </div>
            ))}
        </div>
    );
}

export default Carousel;