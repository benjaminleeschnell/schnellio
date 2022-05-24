const playPause = document.getElementById('playPause');
const bgvid = document.getElementById('bgvid');

playPause.addEventListener('click', function(e) {
    playPause.classList.toggle('play');
    if (bgvid.paused) {
        bgvid.play();
    } else {
        bgvid.pause();
    }
});