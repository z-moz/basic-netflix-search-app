import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import FilmCard from "./components/Films/FilmCard.jsx";
import SearchTabs from "./components/SearchTabs.jsx";
import FilmDetails from "./components/Films/FilmDetails.jsx";

function App() {
  const [films, setFilm] = useState([]);
  useEffect(() => {
    fetch("https://zsussanna-api.fly.dev/api/movies")
      .then((res) => res.json())
      .then((res) => {
        setFilm(res);
        setItem(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const [item, setItem] = useState(films);

  const filterForTheseLanguages = [
    ...new Set(films.map((film) => film.language)),
  ];

  const lang = ["Norwegian", "Swiss German"];
  const cat = ["Drama", "Action, Comedy"];

  const filterItem = () => {
    const newItem = films
      .filter((item) => lang.includes(item.language))
      .filter((item) => cat.includes(item.category));
    setItem(newItem);
  };

  // const filterItem = (lang) => {
  //   const newItem = films.filter((newFilm) => {
  //     return newFilm.language === lang;
  //   });
  //   setItem(newItem);
  // };

  return (
    <>
      <header>
        <h1>
          <a href="/">Search Netflix</a>
        </h1>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchTabs
                  filterItem={filterItem}
                  setItem={setItem}
                  filterForTheseLanguages={filterForTheseLanguages}
                  films={films}
                />
                <FilmCard item={item} />
              </>
            }
          />
          <Route
            path="/details/:filmID"
            element={<FilmDetails films={films} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
