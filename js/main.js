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

/**********************************Start-Login-Page */

// const modelcontainer= document.getElementById(model-container);
// const showBtn =document.getElementById("show-btn");
// showBtn.addEventListener("click",()=>{
//   modelcontainer.style.visibility='visible';

// });

const myForm = document.getElementById("myForm");
const openFor = document.getElementById("openForm");
const overlay = document.querySelector(".overlay");
const hideForm = document.querySelector(".hide-form");
hideForm.addEventListener("click", openForm);
openFor.addEventListener('click', openForm);
function openForm() {
  // document.getElementById("myForm").style.display = "block";
  myForm.classList.toggle("hide");
  overlay.classList.toggle("hide");
}

// function closeForm() {
//   document.getElementById("myForm").style.display = "none";
// }
const dome = document.querySelectorAll(".demo")
// Set the date we're counting down to
var countDownDate = [
  new Date("Jan 1, 2022 15:37:25").getTime(),
  new Date("Jan 30, 2022 15:37:25").getTime(),
  new Date("Jan 30, 2022 15:37:25").getTime(),
  new Date("jan 20, 2022 00:00:00").getTime(),
]

dome.forEach((element, index) => {
  // Update the count down every 1 second
  var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate[index] - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    element.innerHTML = days + " " + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      element.innerHTML = "EXPIRED";
    }
  }, 1000);

})

function countCard(){
  var item = document.getElementById('conter');
  item.style.visibility = "visible";
  var c = parseInt(item.innerHTML) +1;
  item.innerHTML=c;

}
/*************************Rating */
// const filter = document.querySelector(".filter-container select");
// const boxes = document.querySelectorAll(".box");
// console.log(filter);
// // console.log(categories);s
// filter.addEventListener("click", function (option) {
//   boxes.forEach(function (box) {
//     if (!box.classList.contains(filter.value)) box.classList.add("hide");
//     else box.classList.remove("hide");
//     if (filter.value === "all")
//       box.classList.remove("hide")
//   });
// });


/************************Rating **************/
// const modelcontainer2= document.getElementById(model-container2);
// const showBtn =document.getElementById("signup");
// showBtn.addEventListener("click",()=>{
//   modelcontainer2.style.visibility='visible';

// });


// ================== resposive header =================
const toggle = document.querySelector(".toggle");
const links = document.querySelector("header ul");
toggle.addEventListener('click', function () {
  links.classList.toggle("show");
})

