import React, { useState } from "react";
import Track from "../Track/Track";
import styles from "./TrackList.module.css";

export default function TrackList({ tracks, addToPlayList }) {
  return (
    <ul className={styles.TrackList}>
      {tracks ?
        tracks.map(track => (
          <li key={track.id}><Track track={track} addToPlayList={addToPlayList} /></li>
          )
        ) : <p>No Tracks</p>}
    </ul>
  )
}

