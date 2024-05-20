import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
        return <div className="text-center mt-20 text-white">Loading...</div>;
    }

    if (!manga) {
        return <div className="text-center mt-20 text-white">manga not found</div>;
    }

    return (
        <div className="min-h-screen bg-black text-white p-4">
            <div className="container mx-auto flex flex-col lg:flex-row lg:space-x-8">
                <div className="lg:w-1/3 mb-8 lg:mb-0">
                    <img
                        src={manga.images.jpg.large_image_url}
                        alt={manga.title}
                        className="w-full rounded-lg shadow-lg mb-4"
                    />
                </div>
                <div className="lg:w-2/3 space-y-4">
                    <h1 className="text-4xl font-bold text-yellow-500 mb-4">{manga.title}</h1>
                    <p className="text-lg text-gray-300 mb-4">{manga.synopsis}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h2 className="text-2xl font-semibold text-yellow-500 mb-2">Information</h2>
                            <div className="space-y-2">
                                <div><strong>Type:</strong> {manga.type}</div>
                                <div><strong>Status:</strong> {manga.status}</div>
                                <div><strong>Score:</strong> {manga.score}</div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-yellow-500 mb-2">Genres & Demographics</h2>
                            <ul className="list-disc list-inside space-y-1">
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
    );
};

export default MangaDetail;
