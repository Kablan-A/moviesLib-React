import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

function MoviePreview({ img, title, trailerLink }) {
  return (
    <section className="flex flex-col gap-[1.5vmax]">
      <div
        className="hover:shadow-logoShadow transition-all duration-300
                 relative"
      >
        <img src={img} alt={title} className="rounded-xl w-full" />

        {trailerLink && (
          <a
            href={trailerLink}
            target="blank"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <FontAwesomeIcon
              icon={faCirclePlay}
              className="text-[4vmax] text-white"
            />
          </a>
        )}
      </div>
      <h2 className="text-white text-[1.5vmax]">{title}</h2>
    </section>
  );
}

export default MoviePreview;
