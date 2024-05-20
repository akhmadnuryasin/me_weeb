import axios from 'axios';

const API_URL = 'https://api.jikan.moe/v4';

export const fetchTopAnime = () => axios.get(`${API_URL}/top/anime`);
export const fetchTopManga = () => axios.get(`${API_URL}/top/manga`);
export const fetchRandomAnime = () => axios.get(`${API_URL}/random/anime`);