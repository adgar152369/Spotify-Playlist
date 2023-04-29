import React, { useState, useEffect } from "react";
import styles from "./PlayList.module.css";

export default function PlayList({ savedTrack, trackStatus, onSetTrackStatus }) {
  const [playList, setPlayList] = useState(savedTrack);

  function handleDelete(index) {
    setPlayList(prev => prev.filter((item, i) => console.log(i !== index)));
    onSetTrackStatus(false);
  }

  return (
    <div className={styles.PlayList}>

      {trackStatus && savedTrack ? savedTrack.map((track, index) => (
        <div key={track.id} className={styles.PlayListTrack}>
          <p>{track.title}</p>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      )) : <p>No tracks saved</p>}

      <div className={styles.PlayListSaveBtn}>
        <button>Save To Spotify</button>
      </div>
    </div>
  )
}