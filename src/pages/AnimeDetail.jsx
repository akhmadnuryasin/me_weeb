import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/Layout';
import log from '../components/log';

const AnimeDetail = () => {
    const { animeId } = useParams();
    const [anime, setAnime] = useState(null);
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState(false);


    useEffect(() => {
        log(setContent);
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

    if (content == false) {
        return null;
    }

    if (loading) {
        return <div className="mt-20 text-center text-white">Loading...</div>;
    }

    if (!anime) {
        return <div className="mt-20 text-center text-white">Anime not found</div>;
    }

    return (
        <Layout>
            <div className="min-h-screen p-4 text-white bg-black">
                <div className="container flex flex-col mx-auto lg:flex-row lg:space-x-8">
                    <div className="mb-8 lg:w-1/3 lg:mb-0">
                        <img
                            src={anime.images.jpg.large_image_url}
                            alt={anime.title}
                            className="w-full mb-4 rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="space-y-4 lg:w-2/3">
                        <h1 className="mb-4 text-4xl font-bold text-yellow-500">{anime.title}</h1>
                        <p className="mb-4 text-lg text-gray-300">{anime.synopsis}</p>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <h2 className="mb-2 text-2xl font-semibold text-yellow-500">Information</h2>
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
                                <h2 className="mb-2 text-2xl font-semibold text-yellow-500">Genres & Demographics</h2>
                                <ul className="space-y-1 list-disc list-inside">
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
                    <h2 className="mb-4 text-2xl font-semibold text-yellow-500">Trailer</h2>
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
        </Layout>
    );
};

export default AnimeDetail;
