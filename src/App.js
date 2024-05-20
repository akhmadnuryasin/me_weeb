import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AnimeDetail from './pages/AnimeDetail';
import MangaDetail from './pages/MangaDetail';
import Review from './pages/Review';
import Anime from './pages/Anime';
import Manga from './pages/Manga';
import Recommendations from './pages/Recommendations';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/all/anime" element={<Anime />} />
        <Route path="/all/manga" element={<Manga />} />
        <Route path="/reviews" element={<Review />} />
        <Route path="/anime/:animeId" element={<AnimeDetail />} />
        <Route path="/manga/:mangaId" element={<MangaDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
