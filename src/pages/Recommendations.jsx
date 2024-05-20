import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Recommendations = () => {
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);

    const truncateTitle = (title, maxLength) => {
        if (title.length > maxLength) {
            return title.substring(0, maxLength - 3) + '...';
        }
        return title;
    };
    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const response = await fetch('https://api.jikan.moe/v4/recommendations/anime');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setRecommendations(data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching recommendations:', error);
                setLoading(false);
            }
        };

        fetchRecommendations();
    }, []);

    if (loading) {
        return (
            <Layout>
                <div className='flex justify-center items-center h-screen'>
                    <p className='text-lg text-gray-700'>Loading...</p>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <h1 className='text-3xl font-bold my-8 text-center text-white'>Anime & Manga Recommendations</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {recommendations.map(recommendation => (
                    <section className="py-16 bg-transparent">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-center mb-8">
                                <h2 className="text-base underline font-bold text-white decoration-blue-400 underline-offset-4">Recommended by <a href={recommendation.user.url} className='text-blue-500 hover:underline'>{recommendation.user.username}</a> on {new Date(recommendation.date).toLocaleDateString()}</h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
                                {recommendation.entry.map(anime => (

                                    <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id} className="bg-transparent rounded-lg shadow-md overflow-hidden relative">
                                        <img
                                            src={anime.images.jpg.image_url} alt={anime.title}
                                            className="w-full lg:h-64 h-96 object-cover object-center"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white text-center py-2">
                                            <h3 className="text-base font-semibold">
                                                <span className="text-red-500">
                                                    {anime.mal_id}
                                                </span>
                                                {` ${truncateTitle(anime.title, 14)}`}
                                            </h3>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </Layout>
    );
};

export default Recommendations;
