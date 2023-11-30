import { useState } from "react";
import api from "../api/axiosConfig";

function FormReview({ imdbId, updateReviews }) {
  const [reviewBody, setReviewBody] = useState("");

  function handleChange(value) {
    setReviewBody(value);
  }

  async function submitReview(event) {
    event.preventDefault();

    try {
      const response = await api.post("/api/v1/reviews", {
        reviewBody: reviewBody,
        imdbId: imdbId,
      });
      console.log(response.data);

      updateReviews(imdbId);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="bg-secondaryBlack w-full text-white flex flex-col items-start gap-[3vmin]">
      <label>
        Rate it:
        <textarea
          rows={2}
          cols={25}
          className="text-black p-1 rounded-md w-full"
          type="text"
          name="reviewBody"
          onChange={(event) => handleChange(event.target.value)}
        />
      </label>

      <button
        onClick={(event) => submitReview(event)}
        className="border border-white w-fit flex items-center text-[1.5vmax] 
                           px-[1.5vmax] py-[0.5vmax] rounded-lg hover:shadow-logoShadow
                           transition-all duration-300"
      >
        Submit
      </button>
    </form>
  );
}

export default FormReview;
