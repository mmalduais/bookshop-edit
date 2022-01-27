var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


const myForm = document.getElementById("myForm");
const openFor = document.getElementById("openForm");
const overlay = document.querySelector(".overlay");
const hideForm = document.querySelector(".hide-form");
hideForm.addEventListener("click", openForm);
openFor.addEventListener('click', openForm);
function openForm() {

  myForm.classList.toggle("hide");
  overlay.classList.toggle("hide");
}

/***************************************** */
const toggle = document.querySelector(".toggle");
const links = document.querySelector("header ul");
toggle.addEventListener('click', function () {
  links.classList.toggle("show");
})

