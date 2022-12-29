import React, { useState } from "react";

export default function SearchTabs({ filterForTheseLanguages, filterForTheseCategories, films }) {
    const [filminfo, setFilmInfo] = useState({
    languages: [],
    category: [],
  });

    const handleChange = (e) => {
    // Destructuring
    const { name, value, checked } = e.target;
    const { languages, category } = filminfo;

    // console.log(name);
    // console.log(languages);
    // console.log(category);
    // console.log(filminfo);
    // console.log(`this is the filminfo.category:`);
    // console.log(filminfo.category);
    console.log(`and this is the filminfo.languages:`);
    console.log(filminfo.languages);

    // Case 1  : The user checks the box
    if (checked) {
      if (name === "languages") {
        setFilmInfo({
          languages: [...languages, value],
          category: [...category],
        });
      } else if (name === "category") {
        setFilmInfo({
          languages: [...languages],
          category: [...category, value],
        });
      }
    }

    // Case 2  : The user unchecks the box
    else {
      if (name === "languages") {
        setFilmInfo({
          languages: languages.filter((e) => e !== value),
          category: [...category],
        });
      } else if (name === "category") {
        setFilmInfo({
          languages: [...languages],
          category: category.filter((e) => e !== value),
        });
      }
    }
  };

  // const lang = ["Norwegian", "Swiss German"];
  // const cat = ["Drama", "Action, Comedy"];
 
  const [item, setItem] = useState(films);

  const filterItem = () => {
    const newItem = films.filter((item) => filminfo.languages.includes(item.language))
      // .filter((item) => filminfo.category.includes(item.category));
    setItem(newItem);
  };

  return (
    <>
      <form>
        {filterForTheseLanguages.map((lang, idx) => {
          return (
              <div key={idx}>
                <input
                  type="checkbox"
                  name="languages"
                  id={idx}
                  value={lang}
                  onChange={handleChange}
                />
                <label htmlFor={idx}>{lang}</label>
              </div>
        )
        })}

        {/* {filterForTheseCategories.map((cat, idx) => {
          return (
              <div key={idx}>
                <input
                  type="checkbox"
                  name="languages"
                  id={idx}
                  value={cat}
                  onChange={handleChange}
                />
                <label htmlFor={idx}>{cat}</label>
              </div>
        )
        })} */}

      </form>
      <button onClick={filterItem}>SUBMIT</button>
      <button className="reset-button" onClick={() => setItem(films)}>ALL</button>
    </>
  );
}
