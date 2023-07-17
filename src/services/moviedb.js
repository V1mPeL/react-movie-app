import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

export const fetchUpcoming = async () => {
    try {
        const response = await api.get('/movie/upcoming', {
            params: {
                api_key: API_KEY,
            },
        });
        return response.data.results;
    } catch (error) {
        throw new Error('Failed to fetch upcoming movies');
    }
};

export const getMovieDetails = async (movieId) => {
    try {
        const response = await api.get(`/movie/${movieId}`, {
            params: {
                api_key: API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch movie details');
    }
};

export const getMovieCredits = async (movieId) => {
    try {
        const response = await api.get(`/movie/${movieId}/credits`, {
            params: {
                api_key: API_KEY,
            },
        });
        return response.data.cast;
    } catch (error) {
        throw new Error('Failed to fetch movie credits');
    }
};

export const getMovieByTitle = async (query) => {
    try {
        const response = await api.get(`/search/movie`, {
            params: {
                api_key: API_KEY,
                query: query,
            },
        });
        return response.data.cast;
    } catch (error) {
        throw new Error('Failed to fetch movie credits');
    }
};