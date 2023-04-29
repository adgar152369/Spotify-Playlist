const apiKey = "";

const Spotify = {
  async search() {
    const url = "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`
      }
    }

    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data);
  }
}

export default Spotify;