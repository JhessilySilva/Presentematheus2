  const audio = document.getElementById('audio');
  audio.volume = 0.2

window.addEventListener('load', () => {
  const savedTime = localStorage.getItem('audioTime');
  if (savedTime) {
    audio.currentTime = parseFloat(savedTime);
  }
  audio.play();
});

audio.addEventListener('timeupdate', () => {
  localStorage.setItem('audioTime', audio.currentTime);
});
