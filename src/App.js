import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AnimeDetail from './pages/AnimeDetail';
import MangaDetail from './pages/MangaDetail';
import CharacterDetail from './pages/CharacterDetail';
import Anime from './pages/Anime';
import Manga from './pages/Manga';
import Review from './pages/Review';
import Recommendations from './pages/Recommendations';
import Magazines from './pages/Magazines';
import Clubs from './pages/Clubs';
import SearchResults from './pages/SearchResults';
import Character from './pages/Character';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/all/anime" element={<Anime />} />
        <Route path="/all/manga" element={<Manga />} />
        <Route path="/reviews" element={<Review />} />
        <Route path="/all/characters" element={<Character />} />
        <Route path="/magazines" element={<Magazines />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/anime/:animeId" element={<AnimeDetail />} />
        <Route path="/manga/:mangaId" element={<MangaDetail />} />
        <Route path="/characters/:mangaId" element={<CharacterDetail />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
