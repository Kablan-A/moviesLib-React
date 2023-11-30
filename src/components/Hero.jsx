import playIcon from "../images/play.png";
import { Link } from "react-scroll";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

function Hero({ movies }) {
  return (
    <div
      className="w-full px-navHero min-h-screen grid grid-cols-2 place-items-center gap-[1.5vmax] 
                    py-[13vh]"
    >
      <section className="flex flex-col gap-[1.5vmax] text-white">
        <h1 className="uppercase leading-none">
          <span className="text-[2vmax]">Find Movies</span>
          <br />
          <span
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                     text-transparent bg-clip-text text-[3.5vmax] tracking-tighter"
          >
            TV shows and more
          </span>
        </h1>

        <p className="text-[1.3vmax] opacity-70 sm:w-5/6">
          Dive into a world of endless entertainment with Binge Watch. Your
          go-to destination for non-stop movies and TV shows. Start streaming,
          start binging!
        </p>

        <Link to="librarySection" smooth={true} duration={300}>
          <button
            className="border border-white w-fit flex items-center gap-1 text-[1.5vmax] 
                           px-[1.5vmax] py-[0.5vmax] rounded-lg hover:shadow-logoShadow
                           transition-all duration-300"
          >
            <img src={playIcon} alt="" className="h-[2vmax]" />
            Our Library
          </button>
        </Link>
      </section>

      {movies && (
        <div className="w-full sm:w-3/5 xl:w-2/3">
          <Carousel
            indicators={false}
            fullHeightHover={true}
            className="rounded-xl"
          >
            {movies.map((movie, index) => (
              <Paper key={index}>
                <img src={movie.poster} alt={movie.title} className="w-full" />
              </Paper>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
}

export default Hero;
