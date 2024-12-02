// Get references to the images and the audio elements
const firstImage = document.getElementById('main-image');
const secondImage = document.getElementById('main-image-reverse');
const firstSong = new Audio('/songs/SitaRamanTrimmed.mp3');  // replace with actual path to first song
const secondSong = new Audio('/songs/NaanPizhaiTrimmed.mp3');  // replace with actual path to second song

// Initially, no song is playing
let currentSong = null;

// Function to stop any song that's currently playing
function stopCurrentSong() {
  if (currentSong) {
    currentSong.pause();
    currentSong.currentTime = 0; // reset song to beginning
  }
}

// Event listener for the first image
firstImage.addEventListener('click', () => {
  // Stop the second song if it's playing
  stopCurrentSong();
  // Play the first song
  currentSong = firstSong;
  currentSong.play();
});

// Event listener for the second image
secondImage.addEventListener('click', () => {
  // Stop the first song if it's playing
  stopCurrentSong();
  // Play the second song
  currentSong = secondSong;
  currentSong.play();
});

// Optionally, you can also stop the song when it ends
firstSong.addEventListener('ended', () => {
  currentSong = null; // Reset the current song variable when first song ends
});

secondSong.addEventListener('ended', () => {
  currentSong = null; // Reset the current song variable when second song ends
});



document.addEventListener("DOMContentLoaded", () => {
  // Show the page after everything is loaded
  window.onload = function () {
      document.getElementById('body').classList.add('loaded');
      document.getElementById('loading-screen').style.display = 'none'; // Hide loading screen
      document.getElementById('content').style.display = 'block'; // Show content
  };

  setInterval(updateTime, 1000); // Update every second
});
