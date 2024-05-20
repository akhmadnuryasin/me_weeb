import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import TopAnimeSection from '../components/TopAnimeSection';
import TopMangaSection from '../components/TopMangaSection';
import { BeatLoader } from 'react-spinners';
import { fetchTopAnime, fetchTopManga } from '../api/jikanApi';
import Layout from '../components/Layout';

const Dashboard = () => {
  const [topAnime, setTopAnime] = useState([]);
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


        // // Fetch Random Anime data
        // const randomAnimeResponse = await fetchRandomAnime();
        // setRandomAnime(randomAnimeResponse.data);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='bg-black min-h-screen text-white'>
      {loading ? (
        <div className='flex justify-center items-center h-screen flex-col'>
          <BeatLoader color={'#ffffff'} loading={loading} size={15} />
          <p className='mt-4'>Sedang Mengambil Data</p>
        </div>
      ) : error ? (
        <div className='flex justify-center items-center h-screen'>
          <p>{error}</p>
        </div>
      ) : (
        <>
          <Layout>
            <Hero />
            <TopAnimeSection animeList={topAnime} />
            <TopMangaSection mangaList={topManga} />
          </Layout>
        </>
      )
      }
    </div >
  );
};

export default Dashboard;
