// import functions and grab DOM elements
const nounOne = document.getElementById('noun-1');
const verbOne = document.getElementById('verb-1');
const verbTwo = document.getElementById('verb-2');
const verbThree = document.getElementById('verb-3');
const submitButton = document.getElementById('submit-button');
const hidden = document.getElementById('haiku');

const inputOne= document.getElementById('input-one');
const inputTwo= document.getElementById('input-two');
const inputThree= document.getElementById('input-three');
const inputFour= document.getElementById('input-four');
// initialize state

// set event listeners to update state and DOM
submitButton.addEventListener('click', ()=>{
    nounOne.textContent = inputOne.value ;
    verbOne.textContent = inputTwo.value ;
    verbTwo.textContent = inputThree.value ;
    verbThree.textContent = inputFour.value ;
    hidden.classList.toggle('visible');
})