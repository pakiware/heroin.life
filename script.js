document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');
    const bgVideo = document.getElementById('bg-video');
    const bgAudio = document.getElementById('bg-audio');
    const fadeOutImage = document.getElementById('fade-out-image');
    const clickSound = document.getElementById('click-sound');
    const togglePlayPauseButton = document.getElementById('toggle-play-pause');
    const volumeControl = document.getElementById('volume');
    const speedControl = document.getElementById('speed');

    // Start button click event
    startButton.addEventListener('click', () => {
        clickSound.play(); // Play the click sound

        // Show the fade-out image
        fadeOutImage.style.display = 'block';

        // Start the fade-out animation
        setTimeout(() => {
            fadeOutImage.classList.add('fade-out');
        }, 100); // Slight delay to ensure display block

        // Remove the image after the fade-out transition completes
        setTimeout(() => {
            fadeOutImage.style.display = 'none';
        }, 2100); // 2 seconds for the fade-out effect + 100ms delay

        // Hide the intro screen and show the main content
        introScreen.style.display = 'none';
        mainContent.style.display = 'block';

        // Play the background audio and video
        bgAudio.play();
        bgVideo.play();
    });

    // Media player controls
    let isPlaying = false;

    volumeControl.addEventListener('input', (event) => {
        const volume = event.target.value;
        bgAudio.volume = volume;
    });

    speedControl.addEventListener('input', (event) => {
        const speed = event.target.value;
        bgVideo.playbackRate = speed;
        bgAudio.playbackRate = speed;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const textItems = document.querySelectorAll('#rotating-text .text-item');
    let currentIndex = 0;

    function switchText() {
        textItems.forEach((item, index) => {
            item.classList.remove('active');
            if (index === currentIndex) {
                item.classList.add('active');
            }
        });
        currentIndex = (currentIndex + 1) % textItems.length;
    }

    // Start switching text every 3 seconds
    switchText(); // Show the first item immediately
    setInterval(switchText, 3000); // Switch text every 3 seconds
});

document.addEventListener('DOMContentLoaded', function() {
    const playPauseButton = document.getElementById('play-pause-button');
    const video = document.getElementById('bg-video');
    const audio = document.getElementById('bg-audio');
    
    // Ensure video and audio are paused when the page loads
    video.pause();
    audio.pause();

    playPauseButton.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            audio.play();
            playPauseButton.textContent = 'Pause';
            playPauseButton.setAttribute('aria-label', 'Pause');
        } else {
            video.pause();
            audio.pause();
            playPauseButton.textContent = 'Play';
            playPauseButton.setAttribute('aria-label', 'Play');
        }
    });

    // Update volume and speed controls
    document.getElementById('volume').addEventListener('input', function() {
        video.volume = this.value;
        audio.volume = this.value;
    });

    document.getElementById('speed').addEventListener('input', function() {
        video.playbackRate = this.value;
        audio.playbackRate = this.value;
    });
});

document.querySelectorAll('.link-buttons a').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Get the text to copy from data attribute
      var textToCopy = link.getAttribute('data-copy-text');

      // Create a temporary input element to copy text
      var tempInput = document.createElement('input');
      document.body.appendChild(tempInput);
      tempInput.value = textToCopy;
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
    });
  });

  document.querySelectorAll('.link-buttons a').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Get the text to copy from data attribute
      var textToCopy = link.getAttribute('data-copy-text');

      // Create a temporary input element to copy text
      var tempInput = document.createElement('input');
      document.body.appendChild(tempInput);
      tempInput.value = textToCopy;
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-button');
    const playPauseButton = document.getElementById('play-pause-button');
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');

    startButton.addEventListener('click', function () {
        introScreen.style.display = 'none'; // Hide the intro screen
        mainContent.style.display = 'flex'; // Show the main content
        playPauseButton.style.display = 'block'; // Show the pause button
    });

    // Add functionality for the pause button if needed
    playPauseButton.addEventListener('click', function () {
        // Toggle play/pause functionality here
        const video = document.getElementById('bg-video');
        const audio = document.getElementById('bg-audio');
        if (video.paused) {
            video.play();
            audio.play();
            playPauseButton.textContent = 'Pause';
        } else {
            video.pause();
            audio.pause();
            playPauseButton.textContent = 'Play';
        }
    });
});

window.addEventListener('load', function() {
    var startButton = document.getElementById('start-button');
    startButton.style.background = 'rgba(255, 255, 255, 0.2)';
});
