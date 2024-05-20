// // src/pages/Recommendations.js
// import React, { useEffect, useState } from 'react';
// import { fetchRecommendations } from '../api/jikanApi';

// const Recommendations = () => {
//     const [recommendations, setRecommendations] = useState([]);

//     useEffect(() => {
//         fetchRecommendations().then(response => setRecommendations(response.data.data));
//     }, []);

//     return (
//         <div>
//             <h1>Anime Recommendations</h1>
//             <ul>
//                 {recommendations.map(rec => (
//                     <li key={rec.mal_id}>{rec.entry.title}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Recommendations;
