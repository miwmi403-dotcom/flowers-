onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 1000);

  const music = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");
  const musicIcon = document.getElementById("music-icon");

  musicBtn.addEventListener("click", (e) => {
    e.stopPropagation(); 
    toggleMusic();
  });

  document.body.addEventListener("click", () => {
    if (music.paused && !musicBtn.classList.contains("interacted")) {
      playMusic();
    }
  }, { once: true }); 

  function toggleMusic() {
    if (music.paused) {
      playMusic();
    } else {
      pauseMusic();
    }
  }

  function playMusic() {
    music.play().then(() => {
      musicIcon.innerText = "🔊";
      musicBtn.classList.add("playing", "interacted");
    }).catch(err => {
      console.log("Autoplay diblokir oleh browser, memerlukan klik langsung pada tombol.");
    });
  }

  function pauseMusic() {
    music.pause();
    musicIcon.innerText = "🎵";
    musicBtn.classList.remove("playing");
  }
};