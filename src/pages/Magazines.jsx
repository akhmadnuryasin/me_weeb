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

    if (loading) return (
        <Layout>
            <div className='flex items-center justify-center h-screen'>
                <BeatLoader color={'#ffffff'} size={15} />
            </div>
        </Layout>
    );

    if (error) return (
        <Layout>
            <div className="text-center text-red-500">Error: {error}</div>
        </Layout>
    );

    return (
        <Layout>
            <div className="min-h-screen px-6 pb-6 text-white bg-black">
                <h1 className='my-8 text-3xl font-bold text-center text-white'>Magazines</h1>
                <ul className="">
                    {magazines.map((magazine) => (
                        <li
                            key={magazine.mal_id}
                            className="transition-all duration-300 transform bg-black rounded-lg shadow-md cursor-pointer hover:shadow-lg"
                            onClick={() => handleMagazineClick(magazine.url)}
                        >
                            <h2 className="text-base font-bold text-white underline decoration-blue-400 underline-offset-4">
                                {magazine.name} <a href={magazine.url} className='text-blue-500 hover:underline'>{magazine.count}</a>
                            </h2>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default Magazines;
