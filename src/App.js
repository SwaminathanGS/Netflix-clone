// import logo from './logo.svg';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import API_KEY from './config';
import FirstPage from './Firstpage'
import Navbar from './navbar';
import Comedy from './comedy';
import { useEffect, useState } from 'react';
import Carousel from './views/components/carousel/carousel';
import './App.css';


const CATEGORIES = [
  {
    title: 'Popular Films',
    api: '/movie/popular'
  },
  {
    title: 'Comedy Films',
    api: '/discover/movie',
    query: {
      with_genres: 35,
    }
  },
  {
    title: 'Horror Films',
    api: '/discover/movie',
    query: {
      with_genres: 36,
    }
  },
];

function App() {
  const [filmsByCategories, setFilmCategories] = useState([]);

  const getFilmsByCategories = async () => {
    const response = await Promise.all(
      CATEGORIES.map(({ api, query = {} }) => axios.get(
        `https://api.themoviedb.org/3${api}`,
        { params: { ...query, api_key: API_KEY } }
      ))
    );

    const filmsByCategories = response.map(
      ({ data }, index) => ({ films: data.results || [], ...CATEGORIES[index] })
    );

    return filmsByCategories;
  };

  useEffect(() => {
    async function fetchData() {
      const fileCategories = await getFilmsByCategories();

      setFilmCategories(fileCategories);
    }

    fetchData();

  }, []);

  return (
    <div className="App">
      <Navbar />

      {
        filmsByCategories.map(({ films, title }) => (
          <>
            <h2 className='text-white'>{title}</h2>
            <Carousel items={films} />
          </>
        ))
      }
    </div>
  );
}

export default App;
