const inputSlider = document.querySelector('.hue-slider');
const hueOverlay = document.querySelector('.hue');
const playBtn = document.querySelector('.play');
const playIcon = playBtn.querySelector('img');

let autoHueIt;
let increment = 1;
let playing = false;
let hue = 0;

function autoHue() {
  if (hue === 360) {
    playIcon.setAttribute('src', 'img/play.svg');
    return;
  }
  if (hue > 360) {
    hue += increment;
  }
  hue++;
  hueOverlay.style.backgroundColor = `hsl(${hue}, 70%, 50%)`;
  inputSlider.value = `${hue}`;
  document.documentElement.style.setProperty('--hue-slider', `hsl(${hue}, 70%, 50%)`);
}

export function togglePlay() {
  playing = !playing;
  if (playing) {
    autoHueIt = setInterval(autoHue, 200);
  } else {
    clearInterval(autoHueIt);
  }
  updateButton();
}

function updateButton() {
  const icon = !playing ? 'play.svg' : 'pause.svg';
  playIcon.setAttribute('src', 'img/' + icon);
}

export function hueItYourself(e) {

  playing = false;
  clearInterval(autoHueIt);
  updateButton();

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  hueOverlay.style.backgroundColor = `hsl(${hue}, 70%, 50%)`;
  inputSlider.value = `${hue}`;
  document.documentElement.style.setProperty('--hue-slider', `hsl(${hue}, 70%, 50%)`);

}
