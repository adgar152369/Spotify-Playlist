import React from "react";
import './Track.css';

export default function Track({ track, addToPlayList }) {

  return (
    <div className="track">
      <h2 className="track-title">{track.name}</h2>
      <div className="track-info-container">
        <div className="track-info">
          <p className="track-artist">{track.artist}</p>
          <p className="track-album">{track.album}</p>
        </div>
      </div>
      <div className="track-utils">
        <button onClick={() => addToPlayList(track)}>Add</button>
      </div>
    </div>
  )
}