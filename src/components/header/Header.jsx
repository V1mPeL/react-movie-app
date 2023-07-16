import React, {useState, useEffect} from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { fetchUpcoming } from '../../services/moviedb';
import { Link } from 'react-router-dom';



const Header = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
        try {
            const response = await fetchUpcoming();
            setMovies(response);
        } catch (error) {
            setError(error);
        }
    };

    fetchMovies();

}, []);

if (error) {
    return <div>Error: {error.message}</div>;
}

  console.log(movies)
  return (
    <div className="flex justify-center items-center h-[300p] p-8 relative">
      <Splide className="w-[300px] h-[250px] sm:w-[450px] md:h-[350px] md:w-[600px] lg:w-[800px] "
        options={{ 
        rewind: true,
        perPage: 1,
        pagination: 'splide__pagination splide-pagination-page',
		    page      : 'splide__pagination__page splide-pagination-page-active',
        arrows: false,
        loop: true,
        autoplay: true,
        interval: 3000
      }}
      >
        {movies.map((item) => {
          return(
            <SplideSlide 
            className={'flex flex-col justify-center gap-3 p-8 relative z-10 mx-[55px] h-[250px] md:h-[350px]'}
            style={{
              backgroundImage: `url('https://image.tmdb.org/t/p/w500${item.backdrop_path}')`,
              backgroundSize: 'cover',
            }}
            key={item.id}
          >
            
            <div className='absolute w-4/5 h-[250px] md:h-[350px] top-0 left-0 flex flex-col justify-center z-20 p-[30px]'>
              <p className="text-white font-extrabold text-md md:text-4xl text-left mb-4">{item.original_title}</p>
              <p className="text-white text-sm md:text-xl text-left line-clamp-3">{item.overview}</p>
              <Link to={`/movies/${item.id}`} 
                className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-700 duration-300 text-white font-bold py-1 px-2 rounded max-w-[150px] mt-[25px]"
                
              >
               Read detail
              </Link>
              
            </div>
            <div className='absolute w-screen h-screen top-0 left-0 bg-black opacity-[0.3]'></div>
          </SplideSlide>
          )
        })}
      </Splide>
    </div>
  );
};

export default Header