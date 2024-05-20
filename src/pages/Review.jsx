// // src/pages/Review.js
// import React, { useEffect, useState } from 'react';
// import { fetchAnimeReviews } from '../api/jikanApi';

// const Review = () => {
//     const [reviews, setReviews] = useState([]);

//     useEffect(() => {
//         fetchAnimeReviews().then(response => setReviews(response.data.data));
//     }, []);

//     return (
//         <div>
//             <h1>Anime Reviews</h1>
//             <ul>
//                 {reviews.map(review => (
//                     <li key={review.mal_id}>{review.content}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Review;
