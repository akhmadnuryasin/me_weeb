import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AnimeDetail = () => {
    const { animeId } = useParams();
    const [anime, setAnime] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnime = async () => {
            try {
                const response = await axios.get(`https://api.jikan.moe/v4/anime/${animeId}`);
                setAnime(response.data.data);
            } catch (error) {
                console.error('Error fetching anime data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAnime();
    }, [animeId]);

    if (loading) {
        return <div className="text-center mt-20 text-white">Loading...</div>;
    }

    if (!anime) {
        return <div className="text-center mt-20 text-white">Anime not found</div>;
    }

    return (
        <div className="min-h-screen bg-black text-white p-4">
            <div className="container mx-auto flex flex-col lg:flex-row lg:space-x-8">
                <div className="lg:w-1/3 mb-8 lg:mb-0">
                    <img
                        src={anime.images.jpg.large_image_url}
                        alt={anime.title}
                        className="w-full rounded-lg shadow-lg mb-4"
                    />
                </div>
                <div className="lg:w-2/3 space-y-4">
                    <h1 className="text-4xl font-bold text-yellow-500 mb-4">{anime.title}</h1>
                    <p className="text-lg text-gray-300 mb-4">{anime.synopsis}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h2 className="text-2xl font-semibold text-yellow-500 mb-2">Information</h2>
                            <div className="space-y-2">
                                <div><strong>Type:</strong> {anime.type}</div>
                                <div><strong>Episodes:</strong> {anime.episodes}</div>
                                <div><strong>Status:</strong> {anime.status}</div>
                                <div><strong>Duration:</strong> {anime.duration}</div>
                                <div><strong>Rating:</strong> {anime.rating}</div>
                                <div><strong>Score:</strong> {anime.score}</div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-yellow-500 mb-2">Genres & Demographics</h2>
                            <ul className="list-disc list-inside space-y-1">
                                {anime.genres.map((genre) => (
                                    <li key={genre.mal_id}>{genre.name}</li>
                                ))}
                                {anime.demographics.map((demographic) => (
                                    <li key={demographic.mal_id}>{demographic.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Trailer</h2>
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        width="100%"
                        height="100%"
                        src={anime.trailer.embed_url}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg shadow-lg"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default AnimeDetail;
