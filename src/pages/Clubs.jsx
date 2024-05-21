import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Anime from './Anime';
import { BeatLoader } from 'react-spinners';

const Clubs = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('https://api.jikan.moe/v4/clubs');
                if (!response.ok) {
                    throw new Error('Failed to fetch reviews');
                }
                const data = await response.json();
                setReviews(data.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);


    return (
        <Layout>
            {loading ? (
                <div className='flex items-center justify-center h-screen'>
                    <BeatLoader color={'#ffffff'} size={15} />
                </div>
            ) : (
                <div>
                    <h1 className='px-5 my-8 text-3xl font-bold text-center text-white'>Clubs</h1>
                    <div className="grid grid-cols-1 gap-4 px-4 pt-16 pb-8 text-white bg-black reviews-container sm:grid-cols-2 md:grid-cols-3">
                        {reviews.map(review => (
                            <div key={review.mal_id} className="flex items-start p-4 bg-black rounded-lg review-card">
                                <img src={review.images.jpg.image_url} alt={review.name} className="flex-shrink-0 w-32 h-32 rounded-lg shadow-md" />
                                <div className="flex-1 ml-4">
                                    <div className="mb-4">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-semibold">{review.name}</h3>
                                        </div>
                                        <p className="text-gray-300"><strong>Members: </strong>{review.members}</p>
                                        <p className="text-gray-300"><strong> Category <a className="text-blue-300" href={review.url}>{review.category}</a></strong></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            )}
        </Layout>
    );
};

export default Clubs;
