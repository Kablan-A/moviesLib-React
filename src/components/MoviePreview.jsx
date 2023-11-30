import { Link } from "react-router-dom";

function MoviePreviewLink({ img, title, imdbId }) {
  return (
    <section className="flex flex-col gap-[1.5vmax]">
      <Link to={`/${imdbId}`} preventScrollReset={true}>
        <img
          src={img}
          alt={title}
          className="w-full rounded-xl hover:shadow-logoShadow transition-all duration-300"
        />
      </Link>
      <h2 className="text-white text-[1.5vmax]">{title}</h2>
    </section>
  );
}

export default MoviePreviewLink;
