const playerSlider = document.querySelector('.players-slider');
const leftPlayerButton = document.querySelector('.left-switch');
const rightPlayerButton = document.querySelector('.right-switch');
const currentPlayer = document.querySelector('.current-player');
const playerSlides = Array.from(playerSlider.querySelectorAll('.card-player'));
const countPlayers = playerSlides.length;
let startSlideIdx = 0;

leftPlayerButton.addEventListener('click', () => {
  startSlideIdx = (startSlideIdx - 1 + countPlayers) % countPlayers;
  updateSlider();
});

rightPlayerButton.addEventListener('click', () => {
  startSlideIdx = (startSlideIdx + 1) % countPlayers;
  updateSlider();
});

function updateSlider() {
  currentPlayer.innerHTML = startSlideIdx + 1;

  for (let i = 0; i < countPlayers; i++) {
    if (i === startSlideIdx) {
      const secondSlide = (i + 1) % countPlayers;
      const thirdSlide = (i + 2) % countPlayers;
      playerSlides[i].style.cssText = `
        display: flex;
        order: 0;
      `;
      playerSlides[secondSlide].style.cssText = `
        display: flex;
        order: 1;
      `;
      playerSlides[thirdSlide].style.cssText = `
        display: flex;
        order: 2;
      `;
      i += 2;
    } else {
      playerSlides[i].style.display = 'none';
    }
  }
}

updateSlider();
let autoSlide = setInterval(() => {
  startSlideIdx = (startSlideIdx + 1) % countPlayers;
  updateSlider();
}, 4000);
