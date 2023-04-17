import Player from '@vimeo/player';

const iframe = document.querySelector('.iframe');
const videoPlayer = new Player(iframe);

let currentTime = localStorage.getItem('videoPlaybackTime');

videoPlayer.on('timeupdate', function(data) {
  currentTime = data.seconds;
  localStorage.setItem('videoPlaybackTime', currentTime);
});

if (currentTime !== null) {
  videoPlayer.setCurrentTime(currentTime);
}
