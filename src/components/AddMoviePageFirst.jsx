import api from "../api/axiosConfig";
import { useState, useEffect } from "react";

function AddMoviePageFirst() {
  const [additionalMovies, setAdditionalMovies] = useState();
  // console.log(additionalMovies);

  const [selectedMovie, setSelectedMovie] = useState();
  // console.log(selectedMovie);

  async function getAdditionalMovies() {
    try {
      const response = await api.get("/api/v1/additionalMovies");
      console.log(response.data);

      setAdditionalMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAdditionalMovies();
  }, []);

  function selectMovie(event) {
    event.preventDefault();

    const selectedMovieIndex = event.target.id;
    setSelectedMovie(additionalMovies[selectedMovieIndex]);
  }

  return (
    <div
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
         z-30 transition-all duration-300 w-5/6 md:w-2/3 h-1/3 md:h-4/5 lg:w-2/5"
    >
      <div
        className="w-full h-full bg-secondaryBlack rounded-xl grid grid-cols-2 
        text-white text-[1.3vmax]"
      >
        {additionalMovies && (
          <>
            <div className="p-[3vmin] pr-0 grid place-items-center">
              {selectedMovie ? (
                <img
                  src={selectedMovie.poster}
                  alt={selectedMovie.title}
                  className="h-full rounded-xl shadow-btnShadow"
                />
              ) : (
                <p>Select movie</p>
              )}
            </div>
            <div
              className="p-[3vmin] grid place-items-center overflow-auto
                 no-scrollbar"
            >
              {additionalMovies.map((item, index) => (
                <button
                  key={index}
                  id={index}
                  className="w-4/5 p-[3vmin] hover:shadow-btnShadow rounded-xl 
                      transition-all duration-300"
                  onClick={(event) => selectMovie(event)}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {selectedMovie && (
              <div className="col-span-2 w-full grid place-items-center p-[3vmin]">
                <button
                  className="w-4/5 p-[3vmin] hover:shadow-btnShadow rounded-xl 
                      transition-all duration-300 shadow-logoShadow"
                >
                  <span className="uppercase underline underline-offset-4">
                    {selectedMovie.title}
                  </span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default AddMoviePageFirst;
