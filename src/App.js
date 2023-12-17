import api from "./api/axiosConfig";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import MoviePage from "./components/MoviePage";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";
import { Routes, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState();

  async function getMovies() {
    try {
      const response = await api.get("/api/v1/movies");
      console.log(response.data);

      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const [userData, setUserData] = useState({
    userType: "",
    eMail: "",
    loggedIn: false,
  });
  console.log(userData);

  function logIn(data) {
    setUserData(data);
  }

  function logOut() {
    setUserData({
      userType: "",
      loggedIn: false,
    });
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="w-full">
      <Nav loggedIn={userData.loggedIn} logOut={logOut} />
      <Routes>
        <Route
          path="/"
          element={<Home movies={movies} userData={userData} />}
        ></Route>
        <Route
          path="/:imdbId"
          element={<MoviePage userData={userData} />}
        ></Route>
        <Route
          path="/signUp"
          element={<SignUpPage updUserData={logIn} />}
        ></Route>
        <Route
          path="/signIn"
          element={<SignInPage updUserData={logIn} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
