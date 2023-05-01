import React, { useState } from "react";
import Track from "../Track/Track";
import "./TrackList.css";

export default function TrackList({ tracks, addToPlayList }) {
  return (
    <div className="TrackList">
      {tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            addToPlayList={addToPlayList}
          />
        );
      })}
    </div>
  )
}

