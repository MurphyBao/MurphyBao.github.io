console.log("Hello, playlist");

var Airtable = require('airtable');

//is airtable connected
console.log(Airtable);

//connect to the specific airtable
var base = new Airtable({apiKey: 'keyVR9gMz8aVRITLz'}).base('appU0pBS78f4EBKx2');

base("playlist")
  .select({}).eachPage(gotPageOfSongs, gotAllSongs);

  var songs = [];

  function gotPageOfSongs(records, fetchNextPage) {
    console.log("gotPageOfSongs()");
    // add the records from this page to our array
    songs.push(...records);
    // request more pages
    fetchNextPage();
  }

  // call back function that is called when all pages are loaded
function gotAllSongs(err) {
    console.log("gotAllSongs()");
  
    // report an error, you'd want to do something better than this in production
    if (err) {
      console.log("error loading data");
      console.error(err);
      return;
    }
  
    // call functions to log and show the books
    consoleLogSongs();
    showSongs();
  }
  
  function consoleLogSongs() {
    console.log("consoleLogSongs()");
    songs.forEach(song => {
      console.log("Song:", song);
    });
  }

  // look through our airtable data, create elements
function showSongs() {
    console.log("showSongs()");
    songs.forEach((song) => {


    // create container for each song adding new class tages, determine whether the object is in the .container or not
    //innerText or img
    var songContainer = document.createElement("div"); 
      songContainer.classList.add("song-container")
      document.querySelector(".container").append(songContainer);
      console.log('songContainer');
      
      // add song titles
      var songTitle = document.createElement("h1");
      songTitle.innerText = song.fields.album_title;
      songTitle.classList.add("song-title");
      songContainer.append(songTitle);
      console.log('songTitle');

      // add artists
      var songArtist = document.createElement("h1");
      songArtist.innerText = song.fields.artist;
      songArtist.classList.add("song-artist");
      songContainer.append(songArtist);
      console.log('songArtist');

      // add images
      var songImage = document.createElement("img");
      songImage.src = song.fields.album_artwork[0].url;
      songImage.classList.add("song-artwork");
      songContainer.append(songImage);
      console.log('songImage');


    });


}






