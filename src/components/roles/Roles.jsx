import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/moviedb'

const Roles = () => {
    const { movieId } = useParams();
    const [roles, setRoles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const fetchMovieCast = async () => {
            try {
                const response = await getMovieCredits(movieId);
                setRoles(response);
            } catch (error) {
                console.log(error);
            }
            finally {
                setIsLoading(false);
            }
        };

        fetchMovieCast();
    }, [movieId]);

    console.log(roles)

    return isLoading ? (
        <div class="w-12 h-12 border-4 border-blue-600 rounded-full loader"></div>
    ) : (
        <ul className='px-8 flex flex-wrap justify-between'>
        {roles.map((role) => { 
            return (
            <li key={role.id} className='px-5 py-5'>
               <div class="rounded-lg shadow-lg p-4 w-[300px]">
                    <img 
                     src={role.profile_path ? `https://image.tmdb.org/t/p/original/${role.profile_path}` : 'https://st4.depositphotos.com/4320021/23631/v/450/depositphotos_236319394-stock-illustration-photo-coming-soon-picture-frame.jpg'}
                     alt={role.name}
                     class="w-full rounded-md mb-4" />
                    <h2 class="text-xl font-bold mb-2">{role.name}</h2>
                    <p class="text-gray-500 mb-4">{role.character}</p>
                </div>
            </li>
            )
        }
        )}
    </ul>
  )
}

export default Roles