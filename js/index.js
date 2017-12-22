const inputSlider = document.querySelector('.hue-slider');
const hueOverlay = document.querySelector('.hue');
const playBtn = document.querySelector('.play');
const playIcon = playBtn.querySelector('img');

import '../scss/styles.scss';
import nextHugh from './modules/slider';
import handleScrobbler from './modules/scrobbler';
import {togglePlay, hueItYourself} from './modules/hue';

let hughSlider = setInterval(nextHugh, 2000);

playBtn.addEventListener('click', togglePlay);
hueOverlay.addEventListener('mousemove', hueItYourself);
inputSlider.addEventListener('change', handleScrobbler);
inputSlider.addEventListener('mousemove', handleScrobbler);
