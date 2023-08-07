const circular_slider = document.querySelector(".wrapper");
const slides = document.querySelectorAll(".slides");
const images = document.querySelectorAll(".slides img");
const character_name = document.querySelector(".character_name");
const descriptions_items = document.querySelectorAll(".descriptions_items");

slides.forEach((slide, i) => {
  slide.onclick = () => {
    circular_slider.style.transform = `rotateZ(-${(360 / 5) * (i + 4)}deg )`;
    character_name.classList.remove("active");

    setTimeout(() => {
      character_name.textContent =
        descriptions_items[i].querySelector("h1").textContent;
      character_name.classList.add("active");
    }, 100);

    images.forEach((image, i) => {
      image.style.setProperty("--img-no", 2);
      image.classList.remove("active");
      descriptions_items[i].classList.remove("active");
    });
    descriptions_items[i].classList.add("active");
    slide.querySelector("img").classList.add("active");
  };
});
