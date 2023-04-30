import React, { useState } from "react";
import Track from "../Track/Track";
import styles from "./TrackList.module.css";

export default function TrackList({ tracks, addToPlayList }) {
  return (
    <ul className={styles.TrackList}>
      {tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            addToPlayList={addToPlayList}
          />
        );
      })}
    </ul>
  )
}

