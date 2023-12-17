import { Element } from "react-scroll";
import MoviePreview from "./MoviePreview";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchMoviePage from "./SearchMoviePage";
import AddMovie from "./AddMovie";

function MoviesPreview({ movies, userType }) {
  const [showSearchPage, setShowSearchPage] = useState(false);

  return (
    <Element name="librarySection">
      <main>
        <div className="w-full px-navHero py-[2vh] flex flex-col gap-[3vmin]">
          <button
            onClick={() => setShowSearchPage(true)}
            className="flex items-center text-[1.5vmax] text-white 
                  hover:underline underline-offset-4 self-start"
          >
            <FontAwesomeIcon icon={faSearch} className="p-1" />
            Search Movie
          </button>
          {movies && (
            <div
              className="w-full grid grid-cols-2 sm:grid-cols-3 
                md:grid-cols-4 lg:grid-cols-5 gap-[3vmin]"
            >
              {movies.map((movie, index) => (
                <MoviePreview
                  key={index}
                  img={movie.poster}
                  title={movie.title}
                  imdbId={movie.imdbId}
                />
              ))}

              {userType === "admin" && <AddMovie />}
            </div>
          )}
        </div>

        {showSearchPage && (
          <SearchMoviePage closeComponent={() => setShowSearchPage(false)} />
        )}
      </main>
    </Element>
  );
}

export default MoviesPreview;
