import api from "../api/axiosConfig";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function AddMoviePageSecond({ closeComponent }) {
  const [additionalMovie, setAdditionalMovie] = useState("");
  console.log(additionalMovie);

  const [searchValue, setSearchValue] = useState();
  console.log(searchValue);

  async function getAdditionalMovie() {
    try {
      console.log(searchValue);
      const response = await api.get(`/api/v1/additionalMovies/${searchValue}`);
      console.log(response.data);

      if (response.data) setAdditionalMovie(response.data);
      else alert("No Movie with such id  ");
    } catch (error) {
      console.log(error);
    }
  }

  async function addAdditionalMovieToMovies() {
    try {
      delete additionalMovie["id"];
      console.log(additionalMovie);

      const response = await api.post(
        "/api/v1/additionalMovies/add",
        additionalMovie
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteAdditionalMovie() {
    try {
      const response = await api.post(
        `/api/v1/additionalMovies/delete/${additionalMovie.imdbId}`
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div
        onClick={closeComponent}
        className="w-full h-screen fixed top-0 left-0 bg-secondaryBlack opacity-40 z-30"
      ></div>

      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
         z-40 transition-all duration-300 w-5/6 md:w-2/3 h-1/3 md:h-4/5 lg:w-2/5"
      >
        <div
          className="w-full h-full bg-secondaryBlack rounded-xl grid grid-cols-2 
        text-white text-[1.3vmax]"
        >
          <div className="p-[3vmin] pr-0 grid place-items-center">
            {additionalMovie ? (
              <img
                src={additionalMovie.poster}
                alt={additionalMovie.title}
                className="w-full h-full rounded-xl shadow-btnShadow"
              />
            ) : (
              <p>Select movie</p>
            )}
          </div>

          <div className="w-full h-full p-[3vmin] grid place-items-center text-[#0d0d0e]">
            <div className="flex items-center bg-white rounded-xl">
              <FontAwesomeIcon icon={faSearch} className="p-1 cursor-pointer" />
              <input
                type="text"
                name="search"
                className="w-full p-1 rounded-xl outline-0"
                minLength={9}
                maxLength={9}
                onChange={(event) => setSearchValue(event.target.value)}
                onKeyDown={(e) =>
                  e.keyCode === 13 ? getAdditionalMovie() : null
                }
              />
            </div>
          </div>

          <div className="col-span-2 w-full grid place-items-center p-[3vmin]">
            <button
              onClick={() => {
                addAdditionalMovieToMovies();
                // deleteAdditionalMovie();
              }}
              className="w-4/5 p-[3vmin] hover:shadow-btnShadow rounded-xl 
                      transition-all duration-300 shadow-logoShadow"
            >
              <span className="uppercase underline underline-offset-4">
                {additionalMovie && additionalMovie.title}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddMoviePageSecond;
