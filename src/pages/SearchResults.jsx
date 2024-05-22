import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import { BeatLoader } from 'react-spinners';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
        return title.substring(0, maxLength - 3) + '...';
    }
    return title;
};

const SearchResults = () => {
    const query = useQuery();
    const searchQuery = query.get('q');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (!searchQuery) {
                return;
            }
            setLoading(true);
            try {
                const response = await fetch(`https://api.jikan.moe/v4/anime?q=${searchQuery}`);
                const data = await response.json();
                if (data.data) {
                    setSearchResults(data.data);
                    setError('');
                } else {
                    setError('No results found');
                }
            } catch (err) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchSearchResults();
    }, [searchQuery]);

    if (!searchQuery) {
        return <div className="text-white">No search query specified.</div>;
    }

    return (
        <Layout>
            <div className="p-4 text-white">

                {loading ? (
                    <div className='flex items-center justify-center h-screen'>
                        <BeatLoader color={'#ffffff'} size={15} />
                    </div>
                ) : error ? (
                    <div className="mt-4 text-red-500">{error}</div>
                ) : (
                    <div>
                        <h1 className='my-8 text-3xl font-bold text-center text-white'>Search Results for "{searchQuery}"</h1>
                        <div className="grid min-h-screen grid-cols-1 gap-8 px-5 pt-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                            {searchResults.map((anime, index) => (
                                <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id} className="relative overflow-hidden bg-transparent rounded-lg shadow-md">
                                    <img
                                        src={anime.images.jpg.image_url}
                                        alt={anime.title}
                                        className="object-cover object-center w-full lg:h-64 h-96"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 py-2 text-center text-white bg-black bg-opacity-80">
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
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default SearchResults;
