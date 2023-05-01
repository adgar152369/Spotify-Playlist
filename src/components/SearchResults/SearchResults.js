import React from "react";
import TrackList from "../TrackList/TrackList";
import './SearchResults.css';

export default function SearchResults({ trackResults, addToPlayList }) {
  return (
    <div className="SearchResults">
      <TrackList tracks={trackResults} addToPlayList={addToPlayList}/>
    </div>
  )
}