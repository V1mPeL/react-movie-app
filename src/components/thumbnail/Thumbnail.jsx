import React from 'react'
import {FiThumbsUp} from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Thumbnail = ({data}) => {
  console.log('Data')
  console.log(data)

  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <Link to={`/movies/${data.id}`} className='group cursor-pointer transition duration-300 ease-in transform sm:hover:scale-105 hover:z-50'>
      <img 
        src={`${BASE_URL}${data.backdrop_path || data.poster_path}` || `${BASE_URL}${data.poster_path}`} 
        alt={`${data.title || data.original_name}`}
        className="w-full h-auto"
      />
      <div className='p-2'>
        <p className='truncate max-w-md'>{data.overview}</p>
        <h2 className='m1-1 text-2xl text-white transition-all duration-300 ease-in-out group-hover:font-bold'>
          {data.title || data.original_name}
        </h2>
        <p className='flex items-center opacity-0 group-hover:opacity-100'>
          <FiThumbsUp className='h-5 mx-2'/> {data.vote_count} 
        </p>
      </div>
    </Link>
  )
}

export default Thumbnail