import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { fetchTopAnime } from '../api/jikanApi';

const Anime = () => {
    const [animeData, setAnimeData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const topAnimeResponse = await fetchTopAnime();
                setAnimeData(topAnimeResponse.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const truncateTitle = (title, maxLength) => {
        if (title.length > maxLength) {
            return title.substring(0, maxLength - 3) + '...';
        }
        return title;
    };

    return (
        <Layout>
            <h1 className='text-3xl font-bold my-8 text-center text-white'>All Anime</h1>

            {loading ? (
                <div className='flex justify-center items-center h-screen'>
                    <p className='text-lg text-gray-700'>Loading...</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 px-5">
                    {animeData && animeData.map((anime, index) => (
                        <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id} className="bg-transparent rounded-lg shadow-md overflow-hidden relative">
                            <img
                                src={anime.images.jpg.image_url}
                                alt={anime.title}
                                className="w-full lg:h-64 h-96  object-cover object-center"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white text-center py-2">
                                <h3 className="text-base font-semibold">
                                    <span className="text-red-500">
                                        {`${index < 9 ? '0' : ''}${index + 1}`}
                                    </span>
                                    {` ${truncateTitle(anime.title, 14)}`}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </Layout>
    );
}

export default Anime;
