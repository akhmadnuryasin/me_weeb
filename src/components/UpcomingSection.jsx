import React, { useEffect, useState } from 'react';
import { fetchRandomAnime } from '../api/jikanApi';
import { Link } from 'react-router-dom';

const UpcomingSection = () => {
    const [anime, setAnime] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getRandomAnime = async () => {
            try {
                const response = await fetchRandomAnime();
                setAnime(response.data.data);
            } catch (error) {
                if (error.response && error.response.status === 429) {
                    setError('Too many requests. Please try again later.');
                } else {
                    setError('Failed to fetch anime. Please try again later.');
                }
                console.error('Failed to fetch anime:', error);
            }
        };

        getRandomAnime();
    }, []);

    if (error) return <div className="text-center text-white">{error}</div>;

    if (!anime) return <div className="text-center text-white"></div>;

    const {
        title,
        title_english,
        images,
        synopsis,
        url
    } = anime;

    const displayTitle = title_english || title;

    const truncateSynopsis = (text, wordLimit) => {
        if (!text) return '';
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
    };

    const truncatedSynopsis = truncateSynopsis(synopsis, 25);

    return (
        <section className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8'>
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl underline font-bold text-white decoration-blue-400 underline-offset-4">Upcoming</h2>
                <Link to="/popular_anime" className="px-4 py-2 text-white text-xs  font-medium">View More</Link>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                <div className="lg:col-span-2">
                    <img
                        src={images.jpg.large_image_url}
                        alt={displayTitle}
                        className="w-full h-96 object-cover rounded-lg"
                    />
                </div>
                <div className="p-4 rounded-lg bg-transparent text-white text-center md:text-left">
                    <h2 className="text-2xl font-bold mb-4">{displayTitle}</h2>
                    <p className="mb-4">{truncatedSynopsis}</p>
                    <div className="flex justify-center md:justify-start">
                        <a href={url} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r rounded-full from-red-500 to-blue-500 text-white font-semibold p-0.5">
                            <span className="flex w-full bg-black text-white rounded-full p-2">
                                Read More
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UpcomingSection;
