var video = document.getElementById('myVideo');
var playIcon = document.querySelector('.play-icon');

playIcon.addEventListener('click', function() {
  video.play();
  playIcon.style.display = 'none';
});

video.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    playIcon.style.display = 'none';
  } else {
    video.pause();
    playIcon.style.display = 'block';
  }
});