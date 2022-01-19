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
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/**********************************Start-Login-Page */

// const modelcontainer= document.getElementById(model-container);
// const showBtn =document.getElementById("show-btn");
// showBtn.addEventListener("click",()=>{
//   modelcontainer.style.visibility='visible';

// });

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// const modelcontainer2= document.getElementById(model-container2);
// const showBtn =document.getElementById("signup");
// showBtn.addEventListener("click",()=>{
//   modelcontainer2.style.visibility='visible';

// });




