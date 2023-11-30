import api from "../api/axiosConfig";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieBackdrops from "./MovieBackdrops";
import MovieInfo from "./MovieInfo";
import Reviews from "./Reviews";
import FormReview from "./FormReview";

function MoviePage({ userData }) {
  const { imdbId } = useParams();

  const [movie, setMovie] = useState();
  console.log(imdbId);

  const [reviews, setReviews] = useState();
  console.log(reviews);

  async function getMovie(imdbId) {
    try {
      const response = await api.get(`/api/v1/movies/${imdbId}`);
      console.log(response.data);

      setMovie(response.data);
      setReviews(response.data.reviewIds);
    } catch (error) {
      console.log(error);
    }
  }

  async function getMovieReviews(imdbId) {
    try {
      const response = await api.get(`/api/v1/movies/reviews/${imdbId}`);
      console.log(response.data);

      setReviews(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMovie(imdbId);
  }, []);

  return (
    movie && (
      <div className="min-h-screen relative">
        {movie.backdrops && (
          <div className="w-full absolute top-0 left-0 -z-10 hidden xl:block">
            <MovieBackdrops backdrops={movie.backdrops} />
          </div>
        )}

        <div
          className="w-full h-full px-navHero pt-[17vh] grid grid-cols-2
               place-content-center gap-[10vmax] md:gap-0"
        >
          <div className="w-full sm:w-1/2">
            <MovieInfo
              img={movie.poster}
              title={movie.title}
              trailerLink={movie.trailerLink}
            />
          </div>

          <div
            className="w-full col-span-2 sm:col-span-1 place-self-center 
                bg-secondaryBlack h-fit p-[3vmin] rounded-lg grid gap-[3vmin]"
          >
            <Reviews reviewsData={reviews} />

            {userData.userType === "user" && (
              <FormReview
                updateReviews={getMovieReviews}
                imdbId={imdbId}
                eMail={userData.eMail}
              />
            )}
          </div>
        </div>
      </div>
    )
  );
}

export default MoviePage;
