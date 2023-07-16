const API_KEY = process.env.REACT_APP_API_KEY;

export default {
    fetchTrending: {
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchActionMovie: {
        title: "Action",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    fetchAdventureMovie: {
        title: "Adventure",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    },
    fetchComedyMovie: {
        title: "Comedy",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    fetchDramaMovie: {
        title: "Drame",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    },
    fetchCrimeMovie: {
        title: "Crime",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    },
    fetchFantasyMovie: {
        title: "Fantasy",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
    },
    fetchHorrorMovie: {
        title: "Horror",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    fetchThrillerMovie: {
        title: "Thriller",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
    },
    fetchRomanceMovie: {
        title: "Romance",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    fetchMysteryMovie: {
        title: "Mystery",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },
    fetchSciFiMovie: {
        title: "Sci-Fi",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    },
    fetchWesternMovie: {
        title: "Western",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    },
    fetchWarnMovie: {
        title: "War",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
    },
    fetchWesternMovie: {
        title: "Western",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    },
}