// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const TopMangaSection = ({ mangaList }) => {
//     const [mangaData, setMangaData] = useState([]);

//     useEffect(() => {
//         setMangaData(mangaList);
//     }, [mangaList]);

//     const limitedMangaList = mangaData.slice(0, 6);

//     const truncateTitle = (title, maxLength) => {
//         if (title.length > maxLength) {
//             return title.substring(0, maxLength - 3) + '...';
//         }
//         return title;
//     };

//     return (
//         <section className="pb-16 bg-transparent">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between mb-8">
//                     <h2 className="text-xl underline font-bold text-white decoration-blue-400 underline-offset-4">Top Manga</h2>
//                     <Link to={"/all/anime"} className="px-4 py-2 hover:text-white/80 text-white text-xs font-medium">View More</Link>
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
//                     {limitedMangaList.map((manga, index) => (
//                         <Link to={`/manga/${manga.mal_id}`} key={manga.mal_id} className="bg-transparent rounded-lg shadow-md overflow-hidden relative">
//                             <img
//                                 src={manga.images.jpg.image_url}
//                                 alt={manga.title}
//                                 className="w-full lg:h-64 h-96  object-cover object-center"
//                             />
//                             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white text-center py-2">
//                                 <h3 className="text-base font-semibold">
//                                     <span className="text-red-500">
//                                         {`${index < 9 ? '0' : ''}${index + 1}`}
//                                     </span>
//                                     {` ${truncateTitle(manga.title, 14)}`}
//                                 </h3>
//                             </div>
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default TopMangaSection;



import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../api/jikanApi';

const TopMangaSection = () => {
    // const [mangaData, setMangaData] = useState([]);
    const [mangaData, setMangaData] = useState([]);

    useEffect(() => {
        const getData = () => {
            console.log("getData");
            axios
              .get(`${API_URL}/top/manga`)
              .then((response) => {
                console.log(response);
                const data = response.data.data;
                console.log(data);
                const limitedList = data.slice(0, 6);
                setMangaData(limitedList);
              })
              .catch((error) => {
                console.log(error);
              });
          };
        
          getData();
      }, []);

    // const limitedMangaList = mangaData.slice(0, 6);

    const truncateTitle = (title, maxLength) => {
        if (title.length > maxLength) {
            return title.substring(0, maxLength - 3) + '...';
        }
        return title;
    };

    return (
        <section className="pb-16 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl underline font-bold text-white decoration-blue-400 underline-offset-4">Top Manga</h2>
                    <Link to={"/all/manga"} className="px-4 py-2 hover:text-white/80 text-white text-xs font-medium">View More</Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {mangaData.map((manga, index) => (
                        <Link to={`/manga/${manga.mal_id}`} key={manga.mal_id} className="bg-transparent rounded-lg shadow-md overflow-hidden relative">
                            <img
                                src={manga.images.jpg.image_url}
                                alt={manga.title}
                                className="w-full lg:h-64 h-96  object-cover object-center"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white text-center py-2">
                                <h3 className="text-base font-semibold">
                                    <span className="text-red-500">
                                        {`${index < 9 ? '0' : ''}${index + 1}`}
                                    </span>
                                    {` ${truncateTitle(manga.title, 14)}`}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopMangaSection;
