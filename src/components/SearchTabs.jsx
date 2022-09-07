import React, { useState, useEffect } from "react";

export default function SearchTabs({ filterItem, setItem, filterForTheseLanguages }) {

  const [films, setFilm] = useState([]);
  useEffect(() => {
    fetch("https://zsussanna-api.fly.dev/api/movies")
    .then(res => res.json())
    .then((res) => {
      setFilm(res)
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <>
      <div className="tablinks">
        {filterForTheseLanguages.map((language, idx) => {
          return (
            <button
              className="search-term"
              onClick={() => filterItem(language)}
              key={idx}
            >
              {language}
            </button>
          );
        })}
        <button
          className="reset-button"
          onClick={() => setItem(films)}
        >
          ALL
        </button>
      </div>
    </>

  );
}
