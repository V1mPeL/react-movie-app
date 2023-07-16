import React from 'react'
import Thumbnail from '../thumbnail/Thumbnail'

const MovieList = ({requests}) => {

  return ( 
    <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-5'>
      {requests.map((result) => {
        return (
          <Thumbnail key={result.id} data={result}></Thumbnail>
        )
      })}
    </div>
  )
}

export default MovieList