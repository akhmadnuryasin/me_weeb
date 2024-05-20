import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('https://api.jikan.moe/v4/reviews/anime');
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

    const scoreToStars = (score) => {
        const maxStars = 5;
        const fullStars = Math.floor(score / 2);
        const halfStar = score % 2 === 1 ? 1 : 0;
        const emptyStars = maxStars - fullStars - halfStar;
        return {
            fullStars: fullStars,
            halfStar: halfStar,
            emptyStars: emptyStars
        };
    };

    return (
        <Layout>
            <h1 className='text-3xl font-bold my-8 text-center text-white px-5'>Anime & Manga Reviews</h1>

            {loading ? (
                <div className='flex justify-center items-center h-screen'>
                    <p className='text-lg text-gray-700'>Loading...</p>
                </div>
            ) : (
                <div className="reviews-container bg-black text-white py-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {reviews.map(review => (
                        <div key={review.mal_id} className="review-card bg-black p-4 rounded-lg flex items-start">
                            <img src={review.entry.images.jpg.large_image_url} alt={review.entry.title} className="rounded-lg shadow-md w-32 h-32 flex-shrink-0" />
                            <div className="flex-1 ml-4">
                                <div className="mb-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-semibold text-lg">{review.entry.title}</h3>
                                    </div>
                                    <p className="text-gray-300"><strong>Tags: </strong>{review.tags.join(', ')}</p>
                                    <p className="text-gray-300"><strong>Reviewed by <a className="text-blue-300" href={review.user.url}>{review.user.username}</a></strong></p>
                                    <div className="flex">
                                        {[...Array(scoreToStars(review.score).fullStars)].map((_, index) => (
                                            <svg key={index} className="w-6 h-6 fill-current text-yellow-400" viewBox="0 0 24 24">
                                                <path d="M12 2.6l1.8 5.9h6.1l-4.9 3.6 1.8 5.9-4.9-3.6-4.9 3.6 1.8-5.9-4.9-3.6h6.1z" />
                                            </svg>
                                        ))}
                                        {scoreToStars(review.score).halfStar === 1 &&
                                            <svg className="w-6 h-6 fill-current text-yellow-400" viewBox="0 0 24 24">
                                                <path d="M12 2.6l1.8 5.9h6.1l-4.9 3.6 1.8 5.9-4.9-3.6-4.9 3.6 1.8-5.9-4.9-3.6h6.1z" />
                                            </svg>
                                        }
                                        {[...Array(scoreToStars(review.score).emptyStars)].map((_, index) => (
                                            <svg key={index} className="w-6 h-6 fill-current text-gray-400" viewBox="0 0 24 24">
                                                <path d="M12 2.6l1.8 5.9h6.1l-4.9 3.6 1.8 5.9-4.9-3.6-4.9 3.6 1.8-5.9-4.9-3.6h6.1z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </Layout>
    );
};

export default Review;
