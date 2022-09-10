import React from "react";

export default function SearchTabs({ filterItem, setItem, filterForTheseLanguages, films }) {
  return (
    <>
      <div className="tab-links">
        {filterForTheseLanguages.map((lang, idx) => {
          return (
            <button
              className="search-term"
              onClick={() => filterItem(lang)}
              key={idx}
            >
              {lang}
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
