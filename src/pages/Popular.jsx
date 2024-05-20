// import React, { useEffect, useState } from 'react';
// import { fetchPopularAnime } from '../api/jikanApi';

// const Popular = () => {
//     const [animeList, setAnimeList] = useState([]);

//     useEffect(() => {
//         fetchPopularAnime().then(response => setAnimeList(response.data.data));
//     }, []);

//     return (
//         <div className="p-5">
//             <h1 className="text-center mb-5 text-2xl font-bold">Popular Anime</h1>
//             <div className="flex flex-wrap gap-5 justify-center">
//                 {animeList.map(anime => (
//                     <div
//                         key={anime.mal_id}
//                         className="bg-white rounded-lg shadow-lg overflow-hidden w-48 transform transition-transform hover:scale-105"
//                     >
//                         <img
//                             src={anime.images.jpg.image_url}
//                             alt={anime.title}
//                             className="w-full h-72 object-cover"
//                         />
//                         <div className="p-4">
//                             <h2 className="text-lg mb-2 text-center">{anime.title}</h2>
//                             <h3 className="text-sm text-gray-500 text-center">
//                                 {anime.title_english || 'N/A'}
//                             </h3>
//                             <div className="flex justify-center items-center mt-2">
//                                 <span>{anime.score || 'N/A'}</span>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Popular;
