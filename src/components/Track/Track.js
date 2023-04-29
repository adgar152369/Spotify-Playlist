import React, { useState, useEffect } from "react";

export default function Track({ track, addToPlayList }) {

  return (
    <div className="track">
      <h2 className="track-title">{track.title}</h2>
      <div className="track-information">
        <p className="track-artist">{track.artist}</p>
        <p className="track-album">{track.album}</p>
      </div>
      <div className="track-utils">
        <button onClick={() => addToPlayList(track)}>Add</button>
      </div>
    </div>
  )
}