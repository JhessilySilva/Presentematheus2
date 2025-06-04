    const audio = document.getElementById('audio');
    const video = document.getElementById('video');
    

    video.addEventListener('play', () => {
      if (!audio.paused) {
        audio.pause();
      }
    });