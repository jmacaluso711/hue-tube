const images = document.querySelectorAll('.hue-image');
let currentHugh = 0;

function nextHugh() {
  images[currentHugh].className = 'hue-image';
  currentHugh = (currentHugh + 1) % images.length;
  images[currentHugh].className = 'hue-image hue-image--visible';
}

export default nextHugh;
