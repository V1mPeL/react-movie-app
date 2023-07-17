import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/moviedb';

const Roles = () => {
  const { movieId } = useParams();
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleItems, setVisibleItems] = useState(8);

  useEffect(() => {
    setIsLoading(true);
    const fetchMovieCast = async () => {
      try {
        const response = await getMovieCredits(movieId);
        setRoles(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  const filteredRoles = roles.filter(
    (role) =>
      role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.character.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 8);
  };

  return (
    <div className="flex flex-col items-center py-4">
      <input
        type="text"
        className="w-[300px] px-4 py-2 mt-4 border bg-transparent border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-md shadow-sm"
        placeholder="Search by name or role"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {isLoading ? (
        <div className="w-12 h-12 border-4 border-blue-600 rounded-full loader"></div>
      ) : (
        <ul className="px-8 flex flex-wrap justify-between">
          {filteredRoles.slice(0, visibleItems).map((role) => {
            return (
              <li key={role.id} className="px-5 py-5">
                <div className="rounded-lg shadow-lg p-4 w-[300px]">
                  <img
                    src={
                      role.profile_path
                        ? `https://image.tmdb.org/t/p/original/${role.profile_path}`
                        : 'https://st4.depositphotos.com/4320021/23631/v/450/depositphotos_236319394-stock-illustration-photo-coming-soon-picture-frame.jpg'
                    }
                    alt={role.name}
                    className="w-full rounded-md mb-4"
                  />
                  <h2 className="text-xl font-bold mb-2">{role.name}</h2>
                  <p className="text-gray-500 mb-4">{role.character}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      {filteredRoles.length > visibleItems && (
        <button
          className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-700 focus:outline-none"
          onClick={loadMoreItems}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Roles;
