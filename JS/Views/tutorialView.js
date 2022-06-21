

let currentTutorial= JSON.parse(localStorage.currentTutorial)





document.querySelector('#video').innerHTML = `
<source id="linkVideo" src="${currentTutorial.videolink}" type="video/mp4"></source>`
document.querySelector("#imageTutorial").src= `${currentTutorial.tutorialImage}`
document.querySelector("#tutorialDescription").innerHTML=`${currentTutorial.description}`
document.querySelector("#tutorialTitle").innerHTML=`${currentTutorial.name}`



/* PLAYER */

// Select elements here
let video = document.getElementById('video');
let videoControls = document.getElementById('video-controls');

let videoWorks = !!document.createElement('video').canPlayType;
if (videoWorks) {
  video.controls = false;
  videoControls.classList.remove('hidden');
}

let playButton = document.getElementById('play');

// Add functions here

// togglePlay toggles the playback state of the video.
// If the video playback is paused or ended, the video is played
// otherwise, the video is paused
function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}

// Add eventlisteners here
playButton.addEventListener('click', togglePlay);

let playbackIcons = document.querySelectorAll('.playback-icons use');

// updatePlayButton updates the playback icon and tooltip
// depending on the playback state
function updatePlayButton() {
  playbackIcons.forEach(icon => icon.classList.toggle('hidden'));
}


video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);



function updatePlayButton() {
  playbackIcons.forEach(icon => icon.classList.toggle('hidden'));

  if (video.paused) {
    playButton.setAttribute('data-title', 'Play')
  } else {
    playButton.setAttribute('data-title', 'Pause')
  }
}

let timeElapsed = document.getElementById('time-elapsed');
let duration = document.getElementById('duration');
// formatTime takes a time length in seconds and returns the time in
// minutes and seconds
function formatTime(timeInSeconds) {
  let result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

  return {
    minutes: result.substr(3, 2),
    seconds: result.substr(6, 2),
  };
};


// initializeVideo sets the video duration, and maximum value of the
// progressBar
function initializeVideo() {
  let videoDuration = Math.round(video.duration);
  let time = formatTime(videoDuration);
  duration.innerText = `${time.minutes}:${time.seconds}`;
  duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
}

video.addEventListener('loadedmetadata', initializeVideo);

// updateTimeElapsed indicates how far through the video
// the current playback is
function updateTimeElapsed() {
  let time = formatTime(Math.round(video.currentTime));
  timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
  timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
}

video.addEventListener('timeupdate', updateTimeElapsed);


let progressBar = document.getElementById('progress-bar');
let seek = document.getElementById('seek');

function initializeVideo() {
  let videoDuration = Math.round(video.duration);
  seek.setAttribute('max', videoDuration);
  progressBar.setAttribute('max', videoDuration);
  let time = formatTime(videoDuration);
  duration.innerText = `${time.minutes}:${time.seconds}`;
  duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
}

// updateProgress indicates how far through the video
// the current playback is by updating the progress bar
function updateProgress() {
  seek.value = Math.floor(video.currentTime);
  progressBar.value = Math.floor(video.currentTime);
}
video.addEventListener('timeupdate', updateProgress);

let seekTooltip = document.getElementById('seek-tooltip');

// updateSeekTooltip uses the position of the mouse on the progress bar to
// roughly work out what point in the video the user will skip to if
// the progress bar is clicked at that point
function updateSeekTooltip(event) {
  let skipTo = Math.round((event.offsetX / event.target.clientWidth) * parseInt(event.target.getAttribute('max'), 10));
  seek.setAttribute('data-seek', skipTo)
  let t = formatTime(skipTo);
  seekTooltip.textContent = `${t.minutes}:${t.seconds}`;
  let rect = video.getBoundingClientRect();
  seekTooltip.style.left = `${event.pageX - rect.left}px`;
}

seek.addEventListener('mousemove', updateSeekTooltip);

// skipAhead jumps to a different point in the video when
// the progress bar is clicked
function skipAhead(event) {
  let skipTo = event.target.dataset.seek ? event.target.dataset.seek : event.target.value;
  video.currentTime = skipTo;
  progressBar.value = skipTo;
  seek.value = skipTo;
}

seek.addEventListener('input', skipAhead);


let volumeButton = document.getElementById('volume-button');
let volumeIcons = document.querySelectorAll('.volume-button use');
let volumeMute = document.querySelector('use[href="#volume-mute"]');
let volumeLow = document.querySelector('use[href="#volume-low"]');
let volumeHigh = document.querySelector('use[href="#volume-high"]');
let volume = document.getElementById('volume');
// updateVolume updates the video's volume
// and disables the muted state if active
function updateVolume() {
  if (video.muted) {
    video.muted = false;
  }

  video.volume = volume.value;
}
volume.addEventListener('input', updateVolume);


// updateVolumeIcon updates the volume icon so that it correctly reflects
// the volume of the video
function updateVolumeIcon() {
  volumeIcons.forEach(icon => {
    icon.classList.add('hidden');
  });

  volumeButton.setAttribute('data-title', 'Mute (m)')

  if (video.muted || video.volume === 0) {
    volumeMute.classList.remove('hidden');
    volumeButton.setAttribute('data-title', 'Unmute')
  } else if (video.volume > 0 && video.volume <= 0.5) {
    volumeLow.classList.remove('hidden');
  } else {
    volumeHigh.classList.remove('hidden');
  }
}

video.addEventListener('volumechange', updateVolumeIcon);


// toggleMute mutes or unmutes the video when executed
// When the video is unmuted, the volume is returned to the value
// it was set to before the video was muted
function toggleMute() {
  video.muted = !video.muted;

  if (video.muted) {
    volume.setAttribute('data-volume', volume.value);
    volume.value = 0;
  } else {
    volume.value = volume.dataset.volume;
  }
}

volumeButton.addEventListener('click', toggleMute);

video.addEventListener('click', togglePlay);

let playbackAnimation = document.getElementById('playback-animation');

// animatePlayback displays an animation when
// the video is played or paused
function animatePlayback() {
  playbackAnimation.animate([
    {
      opacity: 1,
      transform: "scale(1)",
    },
    {
      opacity: 0,
      transform: "scale(1.3)",
    }], {
    duration: 500,
  });
}

video.addEventListener('click', animatePlayback);

const fullscreenButton = document.getElementById('fullscreen-button');
const videoContainer = document.getElementById('video-container');

// toggleFullScreen toggles the full screen state of the video
// If the browser is currently in fullscreen mode,
// then it should exit and vice versa.
function toggleFullScreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else if (document.webkitFullscreenElement) {
    // Need this to support Safari
    document.webkitExitFullscreen();
  } else if (videoContainer.webkitRequestFullscreen) {
    // Need this to support Safari
    videoContainer.webkitRequestFullscreen();
  } else {
    videoContainer.requestFullscreen();
  }
}
fullscreenButton.onclick = toggleFullScreen;

let fullscreenIcons = fullscreenButton.querySelectorAll('use');

// updateFullscreenButton changes the icon of the full screen button
// and tooltip to reflect the current full screen state of the video
function updateFullscreenButton() {
  fullscreenIcons.forEach(icon => icon.classList.toggle('hidden'));

  if (document.fullscreenElement) {
    fullscreenButton.setAttribute('data-title', 'Exit full screen')
  } else {
    fullscreenButton.setAttribute('data-title', 'Full screen')
  }
}
videoContainer.addEventListener('fullscreenchange', updateFullscreenButton);




video.addEventListener('mouseleave', () => {
  fullscreenIcons.forEach(icon => icon.classList.toggle('hidden')); 

})


/* PLAYER END */

