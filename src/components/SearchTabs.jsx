import React from "react";

export default function SearchTabs() {
  return (
    <div className="tab">
      <button
        className="tablinks"
        onClick="openSearchTerm(event, 'Language')"
        id="defaultOpen"
      >
        Language
      </button>
      <button className="tablinks" onClick="openSearchTerm(event, 'Genre')">
        Genre
      </button>
      <button className="tablinks" onClick="openSearchTerm(event, 'Decade')">
        Decade
      </button>
    </div>
  );
}
