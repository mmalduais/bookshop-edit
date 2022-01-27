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

// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2028 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + " " + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

/*************************Rating */
const filter = document.querySelector(".filter-container select");
const boxes = document.querySelectorAll(".box");
console.log(filter);
// console.log(categories);
filter.addEventListener("click", function (option) {
  boxes.forEach(function (box) {
    if (!box.classList.contains(filter.value)) box.classList.add("hide");
    else box.classList.remove("hide");
    if (filter.value === "all")
      box.classList.remove("hide")
  });
});
/***************toggle_Menu****************************/
// ================== resposive header =================
const toggle = document.querySelector(".toggle");
const links = document.querySelector("header ul");
toggle.addEventListener('click', function () {
  links.classList.toggle("show");
})



/***************add counter to basket ****************************/


const book = new Map();

var hideBooksContainer = document.getElementById("books");
// return all books with details in page
const elementbook = document.getElementsByClassName("book-offer");
//var input="المعيلة";

// div we set all element of result search
let result_search = document.getElementById("result-serach");
let textInputSearch = document.getElementById("search-field");
for (var i = 0; i < elementbook.length; i++) {
  var name_book = elementbook[i].children[2].innerText;
  var index_book = i;
  book.set(name_book, index_book);
}

textInputSearch.addEventListener("keyup", function (e) {
  if (e.code == "Enter") {
    searchfun();
  }
});

function searchfun() {

  hideBooksContainer.style.display = "none";
  book.forEach(function (value, key) {
    if (key == textInputSearch.value) {
      result_search.appendChild(elementbook[value]);
    }
  });
}


/*add counter to basket  */
let counterSpan = document.getElementById("counter");
let count = 0;
let basketElement = document.getElementsByClassName("add-to-basket");
for (let i = 0; i < basketElement.length; i++) {
  basketElement[i].addEventListener("click", function (e) {
    if (counterSpan.style.display == "none") {
      counterSpan.style.display = "inline-block";
    }
    count++;
    counterSpan.innerText = count;

  });
}
/* fillter by price slider */
var isDown = false;
var offset = [0, 0];
var diff = 0;
var showValuePrice = document.getElementById("show-price");

let silderRight = document.getElementById("slider-right");
//alert(silderRight.getBoundingClientRect().left);
let farway = silderRight.offsetLeft;
var persentageprice = 150 / farway;
let parent = document.getElementsByClassName("price-range")[0];
parent.addEventListener('mousedown', function (e) {

  //farway=silderRight.offsetLeft;

  isDown = true;
  offset = [
    -silderRight.getBoundingClientRect().left + e.clientX,
    silderRight.offsetTop - e.clientY
  ];
}, true);

document.addEventListener('mouseup', function () {
  isDown = false;
}, true);

silderRight.addEventListener('mousemove', function (event) {

  event.preventDefault();

  if (isDown && silderRight.offsetLeft >= 0 && silderRight.offsetLeft <= farway) {
    diff = farway - silderRight.offsetLeft;
    showValuePrice.innerText = diff * persentageprice
    mousePosition = {

      x: event.clientX,
      y: event.clientY

    };
    silderRight.style.right = (diff + offset[0]) + 'px';
    //silderRight.style.top  = (mousePosition.y + offset[1]) + 'px';
  }
}, true);



