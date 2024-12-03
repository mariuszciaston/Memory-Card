const openingAudio = new Audio("/audio/opening.mp3");
openingAudio.volume = 0.5;
openingAudio.loop = true;
const battleAudio = new Audio("/audio/battle.mp3");
battleAudio.volume = 0.5;
battleAudio.loop = true;

const clickAudio = new Audio("/audio/click.mp3");
const pointAudio = new Audio("/audio/point.mp3");
const flipAudio = new Audio("/audio/flip.mp3");
const errorAudio = new Audio("/audio/error.mp3");
const victoryAudio = new Audio("/audio/victory.mp3");

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

export const playVictory = () => {
  stopAudio(victoryAudio);
  victoryAudio.play();
};
