const openingAudio = new Audio("/sound/opening.mp3");
openingAudio.volume = 0.5;
openingAudio.loop = true;
const battleAudio = new Audio("/sound/battle.mp3");
battleAudio.volume = 0.5;
battleAudio.loop = true;

const clickAudio = new Audio("/sound/click.mp3");
const pointAudio = new Audio("/sound/point.mp3");
const flipAudio = new Audio("/sound/flip.mp3");
const errorAudio = new Audio("/sound/error.mp3");

export const stopAudio = (audio: HTMLAudioElement) => {
  audio.pause();
  audio.currentTime = 0;
};

export const pauseAudio = (audio: HTMLAudioElement) => {
  audio.pause();
};

export const playOpening = () => {
  pauseAudio(openingAudio);
  pauseAudio(battleAudio);
  openingAudio.play();
};

export const playBattle = () => {
  pauseAudio(openingAudio);
  pauseAudio(battleAudio);
  battleAudio.play();
};

export const stopOpening = () => {
  pauseAudio(openingAudio);
};

export const stopBattle = () => {
  pauseAudio(battleAudio);
};

export const playClick = () => {
  stopAudio(clickAudio);
  clickAudio.play();
};
export const playPoint = () => {
  stopAudio(pointAudio);
  pointAudio.play();
};

export const playFlip = () => {
  stopAudio(flipAudio);
  flipAudio.play();
};

export const playError = () => {
  stopAudio(errorAudio);
  errorAudio.play();
};
