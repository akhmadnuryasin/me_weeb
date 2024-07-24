import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { fetchTopCharacters } from "../api/jikanApi";
import { BeatLoader } from "react-spinners";
import log from "../components/log";

const Character = () => {
  const [mangaData, setMangaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(false);

  useEffect(() => {
    log(setContent);
    const fetchData = async () => {
      try {
        const topMangaResponse = await fetchTopCharacters();
        setMangaData(topMangaResponse.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength - 3) + "...";
    }
    return title;
  };

  return (
    <>
      {content && (
        <Layout>
          {loading ? (
            <div className="flex items-center justify-center h-screen">
              <BeatLoader color={"#ffffff"} size={15} />
            </div>
          ) : (
            <div>
              <h1 className="my-8 text-3xl font-bold text-center text-white">
                All Characters
              </h1>
              <div className="grid grid-cols-1 gap-8 px-5 pt-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {mangaData &&
                  mangaData.map((manga, index) => (
                    <Link
                      to={`/characters/${manga.mal_id}`}
                      key={manga.mal_id}
                      className="relative overflow-hidden bg-transparent rounded-lg shadow-md"
                    >
                      <img
                        src={manga.images.jpg.image_url}
                        alt={manga.name}
                        className="object-cover object-center w-full lg:h-64 h-96"
                      />
                      <div className="absolute bottom-0 left-0 right-0 py-2 text-center text-white bg-black bg-opacity-80">
                        <h3 className="text-base font-semibold">
                          <span className="text-red-500">
                            {`${index < 9 ? "0" : ""}${index + 1}`}
                          </span>
                          {` ${truncateTitle(manga.name, 14)}`}
                        </h3>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </Layout>
      )}
    </>
  );
};

export default Character;
