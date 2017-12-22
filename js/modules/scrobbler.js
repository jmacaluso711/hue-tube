const hueOverlay = document.querySelector('.hue');

function handleScrobbler() {
  hueOverlay.style.backgroundColor = `hsl(${this.value}, 70%, 50%)`;
  document.documentElement.style.setProperty(`--${this.name}`, `hsl(${this.value}, 70%, 50%)`);
}

export default handleScrobbler;
