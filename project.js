let i = 0;
let currentImg;

function toggleOpacity() {
  document.querySelector(".img1").style.opacity = 0;
  document.querySelector(".img2").style.opacity = 0;
}

function imageSwap() {
  setTimeout(() => {
    i = (i + 1) % 3;
    currentImg = document.querySelector(`.img${i}`);
    currentImg.style.opacity = 1;
    if (i === 0) {
      toggleOpacity();
    }
    imageSwap();
  }, 5000);
}

toggleOpacity();
imageSwap();