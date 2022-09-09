import React from "react";

export default function SearchTabs({ filterItem, setItem, filterForTheseLanguages, films }) {
  return (
    <>
      <div className="tab-links">
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
