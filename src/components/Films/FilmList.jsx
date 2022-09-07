import React, { useState, useEffect } from "react";

export default function FilmList() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetch("https://dolearning-cors-app.herokuapp.com/https://www.whats-on-netflix.com/wp-content/plugins/whats-on-netflix/json/movie.json")
    .then(res => res.json())
    .then((res) => {
      setFilms(res)
    })
    .catch(err => console.log(err))
  }, []);
  
  return (
    <section className="container">
      {films.map((film, idx) => {
        return (
          <div className="card" key={idx}>
            <div className="card-image">
              <img
                src={film.image_landscape}
                alt={film.title}
              />
            </div>
            <div className="card-content">
              <h3 className="card-title">{film.title}</h3>
              <p className="card-info">
                <span className="card-info-item">{film.category}</span>
                <span className="card-info-item">{film.titlereleased}</span>
                <span className="card-info-item">{film.runtime}</span>
              </p>
              <p className="card-info">
                Director: {film.director}
              </p>
              <div className="card-description">
                <p>{film.description}</p>
              </div>
            </div>
          </div>
        )
      })}
      
    </section>
  );
}
