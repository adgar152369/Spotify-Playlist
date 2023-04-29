import React, { useState } from "react";

export default function SearchBar({ tracks }) {
  const [track, setTrack] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(track)
  }

  function handleTrack({ target }) {
    setTrack(target.value);
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <div className="search-bar">
          <input type="text" onChange={handleTrack} placeholder="Search for title, artist, or album"/>
        </div>
        <button type="submit">Go</button>
      </form>
    </div>
  )
}