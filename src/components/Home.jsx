import Hero from "./Hero";
import MoviesPreview from "./MoviesPreview";

function Home({ movies, userData }) {
  return (
    <>
      <Hero movies={movies} />
      <MoviesPreview
        movies={movies}
        loggedIn={userData.loggedIn}
        userType={userData.userType}
      />
    </>
  );
}

export default Home;
