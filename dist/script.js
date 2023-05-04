const backgrounds = document.querySelectorAll("#background");

backgrounds[2].classList.remove("fadeout");
backgrounds[2].classList.add("fadein");

let index = 0;
setInterval(() => {
  if (index != 0) {
    backgrounds[index].classList.remove("fadeout");
    backgrounds[index].classList.add("fadein");

    backgrounds[index - 1].classList.remove("fadein");
    backgrounds[index - 1].classList.add("fadeout");

    index = (index + 1) % backgrounds.length;
  } else {
    backgrounds[index].classList.remove("fadeout");
    backgrounds[index].classList.add("fadein");

    backgrounds[2].classList.remove("fadein");
    backgrounds[2].classList.add("fadeout");

    index = (index + 1) % backgrounds.length;
  }
}, 4000);
