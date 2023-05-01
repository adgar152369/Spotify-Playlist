import React, { useState } from "react";
import "./PlayList.css";

export default function PlayList({ savedPlayListTrack, onSavePlayList, onDelete }) {
  const [playListName, setPlayListName] = useState('');

  function handleListName({ target }) {
    setPlayListName(target.value);
  }

  return (
    <div className="PlayList">

      <input type="text" onChange={handleListName} placeholder="Playlist Name" />

      {savedPlayListTrack ? savedPlayListTrack.map((track, index) => (
        <div key={track.id} className="PlayListTrack">
          <div className="playlist-info">
            <p className="PlayListTrackName">{track.name}</p>
            <span className="PlayListTrackArtist">{track.artist}</span>
          </div>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      )) : <p>No tracks saved</p>}

      <div className="PlayListSaveBtn">
        <button onClick={onSavePlayList}>Save To Spotify</button>
      </div>
    </div>
  )
}