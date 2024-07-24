import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { BeatLoader } from "react-spinners";
import log from "../components/log";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(false);

  useEffect(() => {
    log(setContent);
    const fetchReviews = async () => {
      try {
        const response = await fetch("https://api.jikan.moe/v4/reviews/anime");
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        setReviews(data.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
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
      emptyStars: emptyStars,
    };
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
              <h1 className="px-5 my-8 text-3xl font-bold text-center text-white">
                Anime & Manga Reviews
              </h1>
              <div className="grid grid-cols-1 gap-4 px-4 pt-16 pb-8 text-white bg-black reviews-container sm:grid-cols-2 md:grid-cols-3">
                {reviews.map((review) => (
                  <div
                    key={review.mal_id}
                    className="flex items-start p-4 bg-black rounded-lg review-card"
                  >
                    <img
                      src={review.entry.images.jpg.large_image_url}
                      alt={review.entry.title}
                      className="flex-shrink-0 w-32 h-32 rounded-lg shadow-md"
                    />
                    <div className="flex-1 ml-4">
                      <div className="mb-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold">
                            {review.entry.title}
                          </h3>
                        </div>
                        <p className="text-gray-300">
                          <strong>Tags: </strong>
                          {review.tags.join(", ")}
                        </p>
                        <p className="text-gray-300">
                          <strong>
                            Reviewed by{" "}
                            <a className="text-blue-300" href={review.user.url}>
                              {review.user.username}
                            </a>
                          </strong>
                        </p>
                        <div className="flex">
                          {[...Array(scoreToStars(review.score).fullStars)].map(
                            (_, index) => (
                              <svg
                                key={index}
                                className="w-6 h-6 text-yellow-400 fill-current"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2.6l1.8 5.9h6.1l-4.9 3.6 1.8 5.9-4.9-3.6-4.9 3.6 1.8-5.9-4.9-3.6h6.1z" />
                              </svg>
                            )
                          )}
                          {scoreToStars(review.score).halfStar === 1 && (
                            <svg
                              className="w-6 h-6 text-yellow-400 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2.6l1.8 5.9h6.1l-4.9 3.6 1.8 5.9-4.9-3.6-4.9 3.6 1.8-5.9-4.9-3.6h6.1z" />
                            </svg>
                          )}
                          {[
                            ...Array(scoreToStars(review.score).emptyStars),
                          ].map((_, index) => (
                            <svg
                              key={index}
                              className="w-6 h-6 text-gray-400 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2.6l1.8 5.9h6.1l-4.9 3.6 1.8 5.9-4.9-3.6-4.9 3.6 1.8-5.9-4.9-3.6h6.1z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Layout>
      )}
    </>
  );
};

export default Review;
