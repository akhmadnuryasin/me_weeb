import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/Layout';
import log from '../components/log';

const CharacterDetail = () => {
    const { mangaId } = useParams();
    const [manga, setmanga] = useState(null);
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState(false);


    useEffect(() => {
        log(setContent);
        const fetchmanga = async () => {
            try {
                const response = await axios.get(`https://api.jikan.moe/v4/characters/${mangaId}`);
                setmanga(response.data.data);
            } catch (error) {
                console.error('Error fetching manga data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchmanga();
    }, [mangaId]);

    if (content == false) {
        return null;
    }

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
                            src={manga.images.jpg.image_url}
                            alt={manga.name}
                            className="w-full mb-4 rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="space-y-4 lg:w-2/3">
                        <h1 className="mb-4 text-4xl font-bold text-yellow-500">{manga.name}</h1>
                        <h1 className="mb-4 text-4xl font-bold text-yellow-500">{manga.name_kanji}</h1>
                        <p className="mb-4 text-lg text-gray-300">{manga.about}</p>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <h2 className="mb-2 text-2xl font-semibold text-yellow-500">Nicknames</h2>
                                {manga.nicknames.map((user, index) => (
                                    <div className="space-y-2" key={index}>
                                        <div>{user}</div>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <h2 className="mb-2 text-2xl font-semibold text-yellow-500">Favorites</h2>
                                <ul className="space-y-1 list-disc list-inside">
                                    <li className='list-none'>{manga.favorites}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CharacterDetail;
