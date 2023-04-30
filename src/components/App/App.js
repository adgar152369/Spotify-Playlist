import React, { useState } from 'react';
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from '../SearchResults/SearchResults';
import PlayList from "../PlayList/PlayList";
import Spotify from '../../utils/Spotify';
import styles from "../App/App.module.css";

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
  const [playList, setPlayList] = useState([]);
  // const [trackStatus, setTrackStatus] = useState(false);
  
  function addToPlayList(track) {
    if (!playList.some(saved => saved.id === track.id)) {
      setPlayList([...playList, track]);
    }
  }

  function deleteFromPlayList(index) {
    setPlayList(prev => prev.filter((item, i) => i !== index));
  }

  return (
    <div className="App">
      <SearchBar tracks={tracks} />

      <div className={styles.TracksContainer}>
        <SearchResults trackResults={TRACKS} addToPlayList={addToPlayList}/>
        <PlayList onDelete={deleteFromPlayList} savedPlayList={playList} />
      </div>

    </div>
  );
}

export default App;
