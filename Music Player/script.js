const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const volumeControl = document.getElementById('volume');

// List of songs
const songs = ['songs/song1.mp3', 'songs/song2.mp3', 'songs/song3.mp3'];
let currentSongIndex = 0;

// Load initial song
audio.src = songs[currentSongIndex];

// Play and pause functionality
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = 'Pause';
    } else {
        audio.pause();
        playBtn.textContent = 'Play';
    }
});

// Skip to the previous track
prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audio.src = songs[currentSongIndex];
    audio.play();
    playBtn.textContent = 'Pause';
});

// Skip to the next track
nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audio.src = songs[currentSongIndex];
    audio.play();
    playBtn.textContent = 'Pause';
});

// Adjust volume
volumeControl.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});
