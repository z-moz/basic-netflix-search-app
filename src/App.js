import React, { useState, useEffect } from "react";
import FilmCard from "./components/Films/FilmCard.jsx";
import SearchTabs from "./components/SearchTabs";

function App() {
  const [films, setFilm] = useState([]);
  useEffect(() => {
    fetch("https://zsussanna-api.fly.dev/api/movies")
      .then((res) => res.json())
      .then((res) => {
        setFilm(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const [item, setItem] = useState(films);

  const filterForTheseLanguages = [
    ...new Set(films.map((film) => film.language)),
  ];

  const filterItem = (curlang) => {
    const newItem = films.filter((newFilm) => {
      return newFilm.language === curlang;
    });
    setItem(newItem);
  };

  return (
    <>
      <div className="">
        <div className="">
          <h1 className="title">Search Netflix</h1>
          <SearchTabs
            filterItem={filterItem}
            setItem={setItem}
            filterForTheseLanguages={filterForTheseLanguages}
          />
          <FilmCard item={item} />
        </div>
      </div>
    </>
  );
}

export default App;
