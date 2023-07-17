import React, { useState } from "react";
import Thumbnail from "../thumbnail/Thumbnail";
import MovieList from "../movieList/MovieList";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}`
      );
      const data = await res.json();

      setSearchResults(data.results);
    } catch (error) {
      console.error("Error searching movies:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8">
      <form className="flex items-center justify-center my-4 ">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter movie title"
          className="px-4 py-2 border bg-transparent rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-[40px]"
        />
        <button
          onClick={handleSearch}
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-700 focus:outline-none transition duration-300 h-[40px]"
        >
          Search
        </button>
      </form>

      {isLoading ? (
        <div className="w-12 h-12 border-4 border-blue-600 rounded-full loader"></div>
      ) : (
        <MovieList requests={searchResults} />
      )}
    </div>
  );
};

export default SearchPage;
