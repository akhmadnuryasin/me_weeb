import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';

const Magazines = () => {
    const [magazines, setMagazines] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMagazines = async () => {
            try {
                const response = await axios.get('https://api.jikan.moe/v4/magazines');
                setMagazines(response.data.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchMagazines();
    }, []);

    const handleMagazineClick = (url) => {
        window.open(url, '_blank');
    };

    if (loading) {
        return (
            <Layout>
                <div className='flex items-center justify-center h-screen bg-black'>
                    <BeatLoader color={'#ffffff'} size={15} />
                </div>
            </Layout>
        );
    }

    if (error) {
        return (
            <Layout>
                <div className="min-h-screen px-6 py-12 text-center text-red-500 bg-black">
                    <h1 className="my-8 text-3xl font-bold text-white">Magazines</h1>
                    <div>Error: {error}</div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="min-h-screen px-6 py-12 text-white bg-black">
                <h1 className='mb-16 text-3xl font-bold text-center text-white'>Magazines</h1>
                <ul className="grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {magazines.map((magazine) => (
                        <li
                            key={magazine.mal_id}
                            className="transition duration-300 bg-black border border-gray-700 rounded-lg shadow-md cursor-pointer hover:shadow-lg"
                            onClick={() => handleMagazineClick(magazine.url)}
                        >
                            <div className="p-6">
                                <h2 className="mb-2 text-lg font-bold">{magazine.name}</h2>
                                <a href={magazine.url} className='block text-blue-500 hover:underline'>{magazine.count}</a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default Magazines;
