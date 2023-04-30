import React from "react";
import TrackList from "../TrackList/TrackList";

export default function SearchResults({ trackResults, addToPlayList }) {
  console.log(trackResults)
  return (
    <div>
      <TrackList tracks={trackResults} addToPlayList={addToPlayList}/>
    </div>
  )
}