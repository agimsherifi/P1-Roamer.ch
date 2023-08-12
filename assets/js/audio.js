document.addEventListener("DOMContentLoaded", function() {
  const soundButton = document.getElementById("soundButton");
  const audioElement = document.getElementById("audioElement");
  let isPlaying = false;

  soundButton.addEventListener("click", function() {
    if (isPlaying) {
      audioElement.pause();
      isPlaying = false;
    } else {
      audioElement.play();
      isPlaying = true;
    }
  });
});