import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../services/moviedb';
import { AiFillStar } from 'react-icons/ai';
import Roles from '../roles/Roles';

const SingleMoviePage = () => {

    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null)

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await getMovieDetails(movieId)
                setMovieDetails(response)
            } catch (error) {
                console.log(error)
            }
        }
        fetchMovieDetails()
    }, [movieId])
    if (!movieDetails) {
        return <div>Loading...</div>;
    }

    console.log(movieDetails)

  return (
    <div>
        <div className="flex flex-col md:flex-row items-center  md:items-start px-4 py-8 md:p-12">
            <img
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                alt={movieDetails.original_title}
                className="w-[250px] md:w-[300px] h-auto object-cover mb-8 md:mb-0 mr-8"
            />
            <div className="flex flex-col items-center md:items-start">
                <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left mb-4">{movieDetails.original_title}</h1>
                <p className="text-lg md:text-xl text-center md:text-left mb-6">{movieDetails.overview}</p>
                <div className="flex items-center">
                <AiFillStar className="text-yellow-400 mr-1" /> 
                <span className="text-lg md:text-xl font-bold">Rating {movieDetails.vote_average.toFixed(1)}</span>
                </div>
            </div>
        </div>
        <h2 className='text-white text-center text-3xl font-bold'> Actors | Characters</h2>
        <Roles/>
    </div>
    
  )
}

export default SingleMoviePage