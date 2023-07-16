import React, { useState, useEffect} from 'react'
import requests from '../../services/requests'
import { useNavigate, useLocation } from 'react-router-dom'
import MovieList from '../movieList/MovieList'


const Categories = () => {
  const [results, setResults] = useState([]);

  const router = useNavigate();
  const genre = new URLSearchParams(useLocation().search).get('genre');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
        );
        const data = await response.json();
        setResults(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [genre]);


  return (
    <div className='w-screen'>
        <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
            {Object.entries(requests).map(([key, {title, url }]) => (
            <h2 
                key={{key}}
                onClick={() => router(`/?genre=${key}`)}
                className='last:pr-24 cursor-pointer transition duration-300 transform hover:scale-125 hover:text-blue-700 active:text-blue-700'
            >
              {title}
            </h2>
            ))}
        </div>

        <MovieList requests={results}/>

    </div>
  )
}

export default Categories