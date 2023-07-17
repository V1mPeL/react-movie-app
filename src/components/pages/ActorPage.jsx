import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActorById } from "../../services/moviedb";
import { getActorFilmography } from "../../services/moviedb";
import { Link } from "react-router-dom";

const ActorPage = () => {
  const { actorId } = useParams();
  const [actorDetails, setActorDetails] = useState(null);
  const [filmography, setFilmography] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const [actorDetailsResponse, filmographyResponse] = await Promise.all([
          getActorById(actorId),
          getActorFilmography(actorId),
        ]);

        setActorDetails(actorDetailsResponse);
        setFilmography(filmographyResponse);
      } catch (error) {
        console.error("Error fetching actor details and filmography:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [actorId]);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-600 rounded-full loader"></div>
      </div>
    );
  }

  if (!actorDetails) {
    return <div>No actor details found.</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center md:items-start px-4 py-8 md:p-12">
        <img
          src={`https://image.tmdb.org/t/p/w500${actorDetails.profile_path}`}
          alt={actorDetails.name}
          className="w-[250px] md:w-[300px] h-auto object-cover mb-8 md:mb-0 mr-0 md:mr-8"
        />
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left mb-4">
            {actorDetails.name}
          </h1>
          <p className="text-lg md:text-xl text-center md:text-left mb-4">
            {actorDetails.biography}
          </p>
          <div className="flex flex-row text-lg md:text-xl mb-4">
            {actorDetails.birthday && (
              <span className="mr-2">
                <strong>Birthday:</strong> {actorDetails.birthday}
              </span>
            )}
            {actorDetails.place_of_birth && (
              <span>
                <strong>Place of Birth:</strong> {actorDetails.place_of_birth}
              </span>
            )}
          </div>
          <div className="flex items-center">
            <span className="text-lg md:text-xl font-bold">
              Rating: {actorDetails.popularity.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
      <h2 className="text-white text-center text-3xl font-bold">Filmography</h2>
      <div className="flex flex-wrap justify-center px-8 mt-4">
        {filmography.map((movie) => (
          <div
            key={movie.id}
            className="flex items-center px-4 py-2 m-2 rounded"
          >
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActorPage;
