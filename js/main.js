// global variables
let imgs = document.querySelectorAll(".allImg .img");
let imgFloat = document.querySelector(
  ".allDiv-float .div-float .imgAndBtns .img-float"
);
let allDiv = document.querySelector(".allDiv-float");
let divFloat = document.querySelector(".allDiv-float .div-float");
let xmark = document.querySelector(".xmark");
let arrowLeft = document.querySelector(".arrow-left");
let arrowRight = document.querySelector(".arrow-right");
let p = document.querySelector(".p");
let currentImg;

// main function on click images
imgs.forEach((img, i) => {
  img.addEventListener("click", () => {
    currentImg = i;
    imgFloat.src = img.src;
    allDiv.classList.add("allDiv-float-show");
    p.innerHTML = `${i + 1} / ${imgs.length}`;
  });
});

// close btn function
xmark.addEventListener("click", () => {
  allDiv.classList.remove("allDiv-float-show");
});

function changeImgSrc(currentImg) {
  imgFloat.src = imgs[currentImg].src;
  p.innerHTML = `${currentImg + 1} / ${imgs.length}`;
  divFloat.classList.add("opacity80");
  setTimeout(() => {
    divFloat.classList.remove("opacity80");
  }, 200);
}

// arrow Right btn function
arrowRight.addEventListener("click", () => {
  if (currentImg < imgs.length - 1) {
    currentImg++;
  } else {
    currentImg = 0;
  }
  changeImgSrc(currentImg);
});

// arrow Right btn function
arrowLeft.addEventListener("click", () => {
  if (currentImg > 0) {
    currentImg--;
  } else {
    currentImg = imgs.length - 1;
  }
  changeImgSrc(currentImg);
});

// close and navigation with all ways
document.addEventListener("keydown", (e) => {
  if (e.code == "Escape") {
    xmark.click();
  } else if (e.code == "ArrowLeft" || e.code == "ArrowDown") {
    arrowLeft.click();
  } else if (e.code == "ArrowRight" || e.code == "ArrowUp") {
    arrowRight.click();
  }
});
allDiv.addEventListener("click", () => {
  xmark.click();
});
divFloat.addEventListener("click", (e) => {
  e.stopPropagation();
});
