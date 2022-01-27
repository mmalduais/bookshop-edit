/****************************Transation Pay********************************/

const steps = document.querySelectorAll(".step");
const checkoutSteps = document.querySelectorAll(".checkout-step");

let progress = 1;
const progressNumbers = 4;
function handleNextStep() {
    if (progress > progressNumbers) {
        console.log("stop");
    } else {
        steps[progress].classList.add("active");
        console.log(progress);
        for (let i = 0; i < progressNumbers; i++) {
            checkoutSteps[i].classList.add("hide");
        }
        checkoutSteps[progress].classList.remove("hide");
        if (progress < 3) progress++;
    }
}
function handlePrevStep() {
    if (progress <= 0) {
        console.log("stop prev");
        progress = 1;
    } else {
        steps[progress].classList.remove("active");
        for (let i = 0; i < progressNumbers; i++) {
            checkoutSteps[i].classList.add("hide");
        }
        checkoutSteps[progress - 1].classList.remove("hide");
        console.log(progress);
        progress--;
    }
}
/****************************End Transation Pay********************************* */