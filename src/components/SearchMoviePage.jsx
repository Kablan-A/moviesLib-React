import api from "../api/axiosConfig";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import MoviePreview from "./MoviePreview";

function SearchMoviePage({ closeComponent }) {
  const [movie, setMovie] = useState("");
  console.log(movie);

  const [searchValue, setSearchValue] = useState();
  console.log(searchValue);

  async function getMovie() {
    try {
      console.log(searchValue);
      const response = await api.get(`/api/v1/movies/byTitle/${searchValue}`);
      console.log(response.data);

      if (response.data) setMovie(response.data);
      else alert("No Movie with such Title");
    } catch (error) {
      console.log(error);
    }
  }

  // w-5/6 md:w-2/3 h-[40%] md:h-4/5 lg:w-2/5

  return (
    <>
      <div
        onClick={closeComponent}
        className="w-full h-screen fixed top-0 left-0 bg-secondaryBlack opacity-40 z-30"
      ></div>

      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
         z-40 transition-all duration-300 w-2/3 sm:w-1/4"
      >
        <div
          className="h-full bg-secondaryBlack rounded-xl grid
        text-white text-[1.3vmax]"
        >
          <div className="w-full h-full p-[3vmin] text-[#0d0d0e]">
            <div className="flex items-center bg-white rounded-xl place-self-start">
              <FontAwesomeIcon icon={faSearch} className="p-1 cursor-pointer" />
              <input
                type="text"
                name="search"
                className="w-full p-1 rounded-xl outline-0"
                onChange={(event) => setSearchValue(event.target.value)}
                onKeyDown={(e) => e.keyCode === 13 && getMovie()}
              />
            </div>
          </div>

          <div className="p-[3vmin]">
            {movie ? (
              <MoviePreview img={movie.poster} imdbId={movie.imdbId} />
            ) : (
              <p>Search your Title</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchMoviePage;
