import React from "react";

export default function FilmCard({ item }) {
  
  return (
    <section className="container">
      {item.map((film) => {
        return (
          <a href={`https://www.netflix.com/gb/title/${film.netflixid}`} key={film.netflixid} target="_blank" rel="noreferrer" >
          <div className="card" key={film.id}>
            <div className="card-image">
              <img
                src={film.image_portrait}
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
                <p>{film.actors}</p>
                <p>
                  <span className="card-info-item">{film.language}</span>
                  <span className="card-info-item">{film.imdb}</span>
                  <span className="card-info-item">{film.rating}</span>
                </p>
              </div>
            </div>
          </div>
          </a>
        )
      })}
      
    </section>
  );
}
