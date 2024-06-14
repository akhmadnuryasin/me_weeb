import React from 'react';

const Hero = ({ randomAnime }) => {
  console.log(randomAnime);
    const handleClick = () => {
        const element = document.getElementById('top_anime');
        if (element) {
            // Smooth scroll to the element
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const isObjectEmpty = (objectName) => {
      return Object.keys(objectName).length === 0;
    };

    return (
    isObjectEmpty(randomAnime) == false && (

        <section
            className="relative h-screen overflow-hidden bg-top bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${randomAnime.data.images.jpg.large_image_url})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
            <div className="relative flex flex-col items-center justify-center h-full p-8 bg-black/25 md:p-12 lg:px-16 lg:py-24 md:flex-row md:items-start md:justify-start">
                <div className="max-w-lg text-center md:text-start">
                    <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                        {randomAnime.data.titles[0].title}
                    </h2>
                    <p className="hidden max-w-lg text-white/80 md:mt-6 md:block md:text-lg md:leading-relaxed">
                        {randomAnime.data.synopsis}
                    </p>
                    <div className="mt-4 sm:mt-8">
                        <button className="bg-gradient-to-r hover:scale-105 rounded-full from-red-500 to-blue-500 text-white font-semibold p-0.5" onClick={handleClick}>
                            <span className="flex w-full p-2 text-white bg-black rounded-full">
                                Explore Now
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
         )
    );
};

export default Hero;





// import React, { useState, useEffect } from "react";
// import { API_URL } from "../api/jikanApi";

// import axios from "axios";

// const Hero = () => {
//   const [randomAnime, setRandomAnime] = useState({});

//   useEffect(() => {
//     const getData = async () => {
//         console.log("getData");
//         await axios
//           .get(`${API_URL}/random/anime`)
//           .then((response) => {
//             console.log(response);
//             setRandomAnime(response.data);
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       };
    
//       getData();
//   }, []);

//   const handleClick = () => {
//     const element = document.getElementById("top_anime");
//     if (element) {
//       // Smooth scroll to the element
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   useEffect(() => {
//     console.log(randomAnime)
//   }, [randomAnime])

//   const isObjectEmpty = (objectName) => {
//     return Object.keys(objectName).length === 0
//   }

//   return (
//     isObjectEmpty(randomAnime) == false && (
//       <section
//         className="relative h-screen overflow-hidden bg-top bg-no-repeat bg-cover"
//         style={{
//           backgroundImage: `url(${randomAnime.data.images.jpg.large_image_url})`,
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
//         <div className="relative flex flex-col items-center justify-center h-full p-8 bg-black/25 md:p-12 lg:px-16 lg:py-24 md:flex-row md:items-start md:justify-start">
//           <div className="max-w-lg text-center md:text-start">
//             <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
//               {randomAnime.data.titles[0].title}
//             </h2>
//             <p className="hidden max-w-lg text-white/80 md:mt-6 md:block md:text-lg md:leading-relaxed">
//               {randomAnime.data.synopsis}
//             </p>
//             <div className="mt-4 sm:mt-8">
//               <button
//                 className="bg-gradient-to-r hover:scale-105 rounded-full from-red-500 to-blue-500 text-white font-semibold p-0.5"
//                 onClick={handleClick}
//               >
//                 <span className="flex w-full p-2 text-white bg-black rounded-full">
//                   Explore Now
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
//   );
// };

// export default Hero;
