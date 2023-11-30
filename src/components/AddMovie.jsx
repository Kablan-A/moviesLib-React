import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import AddMoviePageSecond from "./AddMoviePageSecond";

function AddMovie() {
  const [showAddPage, setShowAddPage] = useState(false);

  return (
    <div className="flex flex-col gap-[1.5vmax]">
      <div
        onClick={() => setShowAddPage(true)}
        className="w-full h-4/5 flex flex-col justify-center items-center gap-5 
              rounded-xl hover:shadow-logoShadow transition-all duration-300 cursor-pointer"
      >
        <FontAwesomeIcon icon={faPlus} className="text-[4vmax] text-white" />
        <h2 className="text-white text-[1.5vmax]">Add Movie</h2>
      </div>

      {showAddPage && (
        <AddMoviePageSecond closeComponent={() => setShowAddPage(false)} />
      )}
    </div>
  );
}

export default AddMovie;
