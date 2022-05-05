
function fillOutputs() {

  let nameInput = document.getElementById('name-input');
  let name = nameInput.value;
 
  
  let nameOutput = document.getElementById('name-output');
  nameOutput.innerText = name;

 
  let outputDiv = document.getElementById('output');
  outputDiv.style.display = 'block';
}

function sayThing() {
  let noTutorial = document.getElementById('NoTutorial');
  document.write("Ah, I should have recognized you! Allow me to get rid of this mess.");

}

function sayOtherThing() {
  let Tutorial = document.getElementById('Tutorial');
  document.write("Allow me to explain, then! This is a short choose-your-own-adventure thing. Every step of the way, there will be new buttons to press, new decisions to make. To begin, click the button below! <p><button id='StartButton'>Start</button></p> ");

  let StartButton = document.getElementById('start-button');
}


//helper function
function show(id) {
  const element = document.getElementById(id);
  element.style.display = 'block';
}

  //what is the url of your final project?

// how does your project use html?

// how does your project use css?

// how does your project use Javascript?

// How does your project use at least one of the following:
// Event callbacks
// DOM manipulation
// creating a variable
// if statements
// for loops