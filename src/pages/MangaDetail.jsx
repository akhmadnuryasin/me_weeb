import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/Layout';

const MangaDetail = () => {
    const { mangaId } = useParams();
    const [manga, setmanga] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchmanga = async () => {
            try {
                const response = await axios.get(`https://api.jikan.moe/v4/manga/${mangaId}`);
                setmanga(response.data.data);
            } catch (error) {
                console.error('Error fetching manga data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchmanga();
    }, [mangaId]);

    if (loading) {
        return <div className="mt-20 text-center text-white">Loading...</div>;
    }

    if (!manga) {
        return <div className="mt-20 text-center text-white">manga not found</div>;
    }

    return (
        <Layout>
            <div className="min-h-screen p-4 text-white bg-black">
                <div className="container flex flex-col mx-auto lg:flex-row lg:space-x-8">
                    <div className="mb-8 lg:w-1/3 lg:mb-0">
                        <img
                            src={manga.images.jpg.large_image_url}
                            alt={manga.title}
                            className="w-full mb-4 rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="space-y-4 lg:w-2/3">
                        <h1 className="mb-4 text-4xl font-bold text-yellow-500">{manga.title}</h1>
                        <p className="mb-4 text-lg text-gray-300">{manga.synopsis}</p>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <h2 className="mb-2 text-2xl font-semibold text-yellow-500">Information</h2>
                                <div className="space-y-2">
                                    <div><strong>Type:</strong> {manga.type}</div>
                                    <div><strong>Status:</strong> {manga.status}</div>
                                    <div><strong>Score:</strong> {manga.score}</div>
                                </div>
                            </div>
                            <div>
                                <h2 className="mb-2 text-2xl font-semibold text-yellow-500">Genres & Demographics</h2>
                                <ul className="space-y-1 list-disc list-inside">
                                    {manga.genres.map((genre) => (
                                        <li key={genre.mal_id}>{genre.name}</li>
                                    ))}
                                    {manga.demographics.map((demographic) => (
                                        <li key={demographic.mal_id}>{demographic.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default MangaDetail;
