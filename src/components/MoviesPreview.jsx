import { Element } from "react-scroll";
import MoviePreview from "./MoviePreview";
import AddMovie from "./AddMovie";

function MoviesPreview({ movies, userType }) {
  return (
    <Element name="librarySection">
      <main>
        <div className="w-full px-navHero py-[2vh]">
          {movies && (
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[3vmin]">
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
      </main>
    </Element>
  );
}

export default MoviesPreview;
