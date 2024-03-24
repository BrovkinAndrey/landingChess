const playerSlider = document.querySelector('.players-slider');
const leftPlayerButton = document.querySelector('.player-left-switch');
const rightPlayerButton = document.querySelector('.player-right-switch');
const currentPlayers = document.querySelector('.current-player');
const playerSlides = Array.from(playerSlider.querySelectorAll('.card-player'));
const countPlayers = playerSlides.length;
let startPlayerSlideIdx = 0;

const bottomLeftPlayerButton = document.querySelector(
  '.bottom-player-left-switch'
);
const bottomRightPlayerButton = document.querySelector(
  '.bottom-player-right-switch'
);
const bottomCurrentPlayers = document.querySelector('.bottom-current-player');

const stepsSlider = document.querySelector('.steps-slider');
const stepsSlides = Array.from(stepsSlider.querySelectorAll('.step-slide'));
const countSteps = stepsSlides.length;
const selectSlides = document.querySelector('.select-step');
const currentSlide = Array.from(selectSlides.querySelectorAll('.step-point'));
const leftStepButton = document.querySelector('.step-left-switch');
const rightStepButton = document.querySelector('.step-right-switch');
let currentSlideIdx = 0;

leftPlayerButton.addEventListener('click', () => {
  startPlayerSlideIdx = (startPlayerSlideIdx - 1 + countPlayers) % countPlayers;
  updatePlayerSlider();
});
bottomLeftPlayerButton.addEventListener('click', () => {
  startPlayerSlideIdx = (startPlayerSlideIdx - 1 + countPlayers) % countPlayers;
  updatePlayerSlider();
});

rightPlayerButton.addEventListener('click', () => {
  startPlayerSlideIdx = (startPlayerSlideIdx + 1) % countPlayers;
  updatePlayerSlider();
});
bottomRightPlayerButton.addEventListener('click', () => {
  startPlayerSlideIdx = (startPlayerSlideIdx + 1) % countPlayers;
  updatePlayerSlider();
});

leftStepButton.addEventListener('click', () => {
  if (currentSlideIdx !== 0) {
    currentSlideIdx -= 1;
    updateStepSlider();
  }
});

rightStepButton.addEventListener('click', () => {
  if (currentSlideIdx !== countSteps - 1) {
    currentSlideIdx += 1;
    updateStepSlider();
  }
});

function updatePlayerSlider() {
  const widthWindow = document.documentElement.clientWidth;
  if (widthWindow > 550) {
    currentPlayers.innerHTML = startPlayerSlideIdx + 1;
  } else {
    bottomCurrentPlayers.innerHTML = startPlayerSlideIdx + 1;
  }

  for (let i = 0; i < countPlayers; i++) {
    const secondSlide = (i + 1) % countPlayers;
    const thirdSlide = (i + 2) % countPlayers;
    if (widthWindow < 810) {
      if (i === startPlayerSlideIdx) {
        playerSlides[i].style.cssText = `
          display: flex;
          order: 0;
        `;
      } else {
        playerSlides[i].style.display = 'none';
      }
    } else if (widthWindow < 1150) {
      if (i === startPlayerSlideIdx) {
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
      if (i === startPlayerSlideIdx) {
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

function updateStepSlider() {
  stepsSlides.forEach((slide, index) => {
    if (index === currentSlideIdx) {
      slide.style.display = 'flex';
    } else {
      slide.style.display = 'none';
    }
  });

  currentSlide.forEach((point, index) => {
    if (index === currentSlideIdx) {
      point.style.backgroundColor = '#313131';
    } else {
      point.style.backgroundColor = '#d9d9d9';
    }
  });

  if (currentSlideIdx === 0) {
    leftStepButton.style.cssText = `
    color: #D6D6D6;
    cursor: default;
    `;
    leftStepButton.removeEventListener('mouseover', chengeColorButton);
    leftStepButton.removeEventListener('mouseout', chengeColorButton);
  } else {
    leftStepButton.style.cssText = 'cursor: pointer;';
    leftStepButton.addEventListener('mouseover', chengeColorButton);
    leftStepButton.addEventListener('mouseout', chengeColorButton);
  }

  if (currentSlideIdx === countSteps - 1) {
    rightStepButton.style.cssText = `
    color: #D6D6D6;
    cursor: default;
    `;
    rightStepButton.removeEventListener('mouseover', chengeColorButton);
    rightStepButton.removeEventListener('mouseout', chengeColorButton);
  } else {
    rightStepButton.style.cssText = 'cursor: pointer;';
    rightStepButton.addEventListener('mouseover', chengeColorButton);
    rightStepButton.addEventListener('mouseout', chengeColorButton);
  }
}

function chengeColorButton(event) {
  switch (event.type) {
    case 'mouseover':
      this.style.cssText = `color: #fbce51`;
      break;
    case 'mouseout':
      this.style.cssText = `color: #313131`;
      break;
  }
}

updatePlayerSlider();
updateStepSlider();

let autoSlide = setInterval(() => {
  startPlayerSlideIdx = (startPlayerSlideIdx + 1) % countPlayers;
  updatePlayerSlider();
}, 4000);
