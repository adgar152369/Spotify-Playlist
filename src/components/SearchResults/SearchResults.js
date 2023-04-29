import React from "react";
import TrackList from "../TrackList/TrackList";

export default function SearchResults({ trackResults, addToPlayList }) {
  return (
      <TrackList tracks={trackResults} addToPlayList={addToPlayList}/>
  )
}