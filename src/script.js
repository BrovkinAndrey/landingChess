const playerSlider = document.querySelector('.players-slider');
const leftPlayerButton = document.querySelector('.left-switch');
const rightPlayerButton = document.querySelector('.right-switch');
const currentPlayer = document.querySelector('.current-player');
const playerSlides = Array.from(playerSlider.querySelectorAll('.card-player'));
const countPlayers = playerSlides.length;
let startSlideIdx = 0;

leftPlayerButton.addEventListener('click', () => {
  startSlideIdx = (startSlideIdx - 1 + countPlayers) % countPlayers;
  updatePlayerSlider();
});

rightPlayerButton.addEventListener('click', () => {
  startSlideIdx = (startSlideIdx + 1) % countPlayers;
  updatePlayerSlider();
});

function updatePlayerSlider() {
  currentPlayer.innerHTML = startSlideIdx + 1;
  const widthWindow = document.documentElement.clientWidth;

  for (let i = 0; i < countPlayers; i++) {
    const secondSlide = (i + 1) % countPlayers;
    const thirdSlide = (i + 2) % countPlayers;
    if (widthWindow < 810) {
      if (i === startSlideIdx) {
        playerSlides[i].style.cssText = `
          display: flex;
          order: 0;
        `;
      } else {
        playerSlides[i].style.display = 'none';
      }
    } else if (widthWindow < 1150) {
      if (i === startSlideIdx) {
        playerSlides[i].style.cssText = `
          display: flex;
          order: 0;
        `;
        playerSlides[secondSlide].style.cssText = `
          display: flex;
          order: 1;
        `;
        i += 1;
      } else {
        playerSlides[i].style.display = 'none';
      }
    } else {
      if (i === startSlideIdx) {
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
}

updatePlayerSlider();

let autoSlide = setInterval(() => {
  startSlideIdx = (startSlideIdx + 1) % countPlayers;
  updatePlayerSlider();
}, 4000);
