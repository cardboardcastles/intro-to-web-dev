
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
  show

  hide('Tutorial');
  show('question-one'); 
}


//helper functions
function show(id) {
  const element = document.getElementById(id);
  element.style.display = 'block';
}

function hide(id) {
  const element = document.getElementById(id);
  element.style.display = 'none';
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