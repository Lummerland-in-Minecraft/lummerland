
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function changeSlide(direction) {
  slideIndex = (slideIndex + direction + slides.length) % slides.length;
  showSlide(slideIndex);
}

prev.addEventListener("click", () => changeSlide(-1));
next.addEventListener("click", () => changeSlide(1));

// Initial anzeigen
showSlide(slideIndex);
