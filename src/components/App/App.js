import React, { useState, useCallback, useEffect } from 'react';
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from '../SearchResults/SearchResults';
import PlayList from "../PlayList/PlayList";
import Spotify from '../../utils/Spotify';
import "../App/App.css";

const TRACKS = [
  {
    title: "Man In The Box",
    album: "Facelift",
    artist: "Alice In Chains",
    id: 1
  },
  {
    title: "Moth Into Flame",
    album: "Hardwired... To Self-Destruct",
    artist: "Metallica",
    id: 2
  },
  {
    title: "Nutshell",
    album: "Jar Of Flies - EP",
    artist: "Alice In Chains",
    id: 3
  },
  {
    title: "Same Effect",
    album: "Hey u x",
    artist: "BENEE",
    id: 4
  },
];


function App() {
  const [tracks, setTracks] = useState([]);
  const [playListTracks, setPlayListTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  async function searchTrack(term) {
    setLoading(true)
    const results = await Spotify.search(term);
    if (results.length > 0) {
      setTracks(results);
    }
  }

  function addToPlayList(track) {
    if (!playListTracks.some(saved => saved.id === track.id)) {
      setPlayListTracks((prevTracks) => [...prevTracks, track]);
    }
  }

  function deleteFromPlayList(index) {
    setPlayListTracks(prev => prev.filter((item, i) => i !== index));
  }

  function saveToPlayList(name, trackUriArr) {
    console.log(playListTracks);
  }

  return (
    <div className="App">
      <SearchBar onSearch={searchTrack} />

      <div className="TracksContainer">
        <SearchResults trackResults={tracks ? tracks : <p>no tracks</p>} addToPlayList={addToPlayList} />
        <PlayList onDelete={deleteFromPlayList} savedPlayList={playListTracks} />
      </div>

    </div>
  );
}

export default App;
