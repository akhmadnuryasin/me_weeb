import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import TopAnimeSection from "../components/TopAnimeSection";
import TopMangaSection from "../components/TopMangaSection";
import { BeatLoader } from "react-spinners";
import {
  fetchTopAnime,
  fetchTopManga,
  fetchTopCharacters,
  fetchRandomAnime,
} from "../api/jikanApi";
import Layout from "../components/Layout";
import TopCharacterSection from "../components/TopCharacterSection";

const Dashboard = () => {
  const [topAnime, setTopAnime] = useState([]);
  const [randomAnime, setRandomAnime] = useState([]);
  const [topCharacters, setTopCharacters] = useState([]);
  const [topManga, setTopManga] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch Top Anime data
    // const topAnimeResponse = fetchTopAnime();
    // setTopAnime(topAnimeResponse.data.data);

    // // Fetch Top Manga data
    // const topMangaResponse = fetchTopManga();
    // setTopManga(topMangaResponse.data.data);

    // // Fetch Top Characters data
    // const topCharactersResponse = fetchTopCharacters();
    // setTopCharacters(topCharactersResponse.data.data);

    // // // Fetch Random Anime data
    // const randomAnimeResponse = fetchRandomAnime();
    // setRandomAnime(randomAnimeResponse.data);
  }, []);

  return (
    <div className="min-h-screen text-white bg-black">
      <Layout>
        <Hero/>
        <TopAnimeSection />
        <TopMangaSection/>
        <TopCharacterSection />
      </Layout>
    </div>
  );
};

export default Dashboard;
