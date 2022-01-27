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