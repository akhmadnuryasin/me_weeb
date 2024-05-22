import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import TopAnimeSection from '../components/TopAnimeSection';
import TopMangaSection from '../components/TopMangaSection';
import { BeatLoader } from 'react-spinners';
import { fetchTopAnime, fetchTopManga, fetchTopCharacters, fetchRandomAnime } from '../api/jikanApi';
import Layout from '../components/Layout';
import TopCharacterSection from '../components/TopCharacterSection';

const Dashboard = () => {
  const [topAnime, setTopAnime] = useState([]);
  const [randomAnime, setRandomAnime] = useState([]);
  const [topCharacters, setTopCharacters] = useState([]);
  const [topManga, setTopManga] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Top Anime data
        const topAnimeResponse = await fetchTopAnime();
        setTopAnime(topAnimeResponse.data.data);

        // Fetch Top Manga data
        const topMangaResponse = await fetchTopManga();
        setTopManga(topMangaResponse.data.data);

        // Fetch Top Characters data
        const topCharactersResponse = await fetchTopCharacters();
        setTopCharacters(topCharactersResponse.data.data);

        // // Fetch Random Anime data
        const randomAnimeResponse = await fetchRandomAnime();
        setRandomAnime(randomAnimeResponse.data);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Gagal Mengambil Data, Silahkan Coba Kembali.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='min-h-screen text-white bg-black'>
      {loading ? (
        <div className='flex flex-col items-center justify-center min-h-screen'>
          <BeatLoader color={'#ffffff'} loading={loading} size={15} />
          <p className="mt-2">Sedang Mengambil Data</p>
        </div>
      ) : error ? (
        <div className='flex items-center justify-center h-screen'>
          <p>{error}</p>
        </div>
      ) : (
        <>
          <Layout>
            <Hero randomAnime={randomAnime} />
            <TopAnimeSection animeList={topAnime} />
            <TopMangaSection mangaList={topManga} />
            <TopCharacterSection characterList={topCharacters} />
          </Layout>
        </>
      )
      }
    </div >
  );
};

export default Dashboard;
