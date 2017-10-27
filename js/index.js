const inputSlider = document.querySelector('.hue-slider');
const hueTube = document.querySelector('.hue-tube');
const images = document.querySelectorAll('.hue-image');
const hueOverlay = document.querySelector('.hue');
const playBtn = document.querySelector('.play');
const playIcon = playBtn.querySelector('img');
const body = document.querySelector('body');

/*
  Doc Ready
*/

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
    body.classList.remove('loading');
  }, 600)
});

/*
  Hue Image Slider
*/

let currentHugh = 0;
let hughSlider = setInterval(nextHugh, 2000);

function nextHugh() {
  images[currentHugh].className = 'hue-image';
  currentHugh = (currentHugh+1)%images.length;
  images[currentHugh].className = 'hue-image hue-image--visible';
}

/*
  Auto Hue
*/

let autoHueIt;
let increment = 1;
let playing = false;

function autoHue() {
  if(hue === 360) {
    playIcon.setAttribute('src', 'img/play.svg');
    return;
  }
  if(hue > 360) {
    hue += increment;
  }
  hue++;
  hueOverlay.style.backgroundColor = `hsl(${hue}, 70%, 50%)`;
  inputSlider.value = `${hue}`;
  document.documentElement.style.setProperty('--hue-slider', `hsl(${hue}, 70%, 50%)`);
}

function togglePlay() {
  playing = !playing;
  if(playing) {
    autoHueIt = setInterval(autoHue, 200);
  } else {
    clearInterval(autoHueIt);
  }
  updateButton();
}

function updateButton() {
  const icon = !playing ? 'play.svg' : 'pause.svg';
  playIcon.setAttribute('src', 'img/'+icon);
}

playBtn.addEventListener('click', togglePlay);

/*
  Hue it yourself
*/

let hue = 0;

function hueItYourself(e) {

  playing = false;
  clearInterval(autoHueIt);
  updateButton();

  hue++;
  if(hue >= 360) {
    hue = 0;
  }
  hueOverlay.style.backgroundColor = `hsl(${hue}, 70%, 50%)`;
  inputSlider.value = `${hue}`;
  document.documentElement.style.setProperty('--hue-slider', `hsl(${hue}, 70%, 50%)`);

}

hueOverlay.addEventListener('mousemove', hueItYourself);

/*
  Hue Scrobbler
*/

function handleScrobbler() {
  hueOverlay.style.backgroundColor = `hsl(${this.value}, 70%, 50%)`;
  document.documentElement.style.setProperty(`--${this.name}`, `hsl(${this.value}, 70%, 50%)`);
}

inputSlider.addEventListener('change', handleScrobbler);
inputSlider.addEventListener('mousemove', handleScrobbler);
