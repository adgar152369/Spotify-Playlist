import React, { useState } from "react";
import styles from "./PlayList.module.css";

export default function PlayList({ savedPlayList, onDelete }) {
  const [playListName, setPlayListName] = useState('');

  function handleListName({target}) {
    setPlayListName(target.value);
  }

  return (
    <div className={styles.PlayList}>
      
      <input type="text" onChange={handleListName} placeholder="Playlist Name" />

      {savedPlayList ? savedPlayList.map((track, index) => (
        <div key={track.id} className={styles.PlayListTrack}>
          <p>{track.title}</p>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      )) : <p>No tracks saved</p>}

      <div className={styles.PlayListSaveBtn}>
        <button>Save To Spotify</button>
      </div>
    </div>
  )
}