const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

const songs = [
    'musicas/musica1.mp3',
    'musicas/muscia2.mp3',
    'musicas/musica3.mp3',
    'musicas/musica4.mp3',
    'musicas/musica5.mp3',
    'musicas/musica6.mp3',
    'musicas/musica7.mp3',
    'musicas/musica8.mp3',
    'musicas/musica9.mp3',
    'musicas/musica10.mp3' 
];

let currentSongIndex = 0;

function loadSong() {
    audio.src = songs[currentSongIndex];
}

function playPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
}

function playNext() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong();
    audio.play();
}

function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong();
    audio.play();
}

loadSong();

playPauseButton.addEventListener('click', playPause);
nextButton.addEventListener('click', playNext);
prevButton.addEventListener('click', playPrev);
