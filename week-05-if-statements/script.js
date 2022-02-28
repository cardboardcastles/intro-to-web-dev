
function submitAnswerOne() {
  const answerOneInput = document.getElementById('answer-one-input');
  // Get the text from answer one's input element
  const answerOne = answerOneInput.value;

  if(answerOne == '5060') {
    alert("Correct!");
    hide('question-one');
    show('question-two');
  } else if(answerOne == 'a number') {
    alert('oh, how clever. Get a calculator and try again.');
  } else {
    alert('...try again.');
  }
}


function submitAnswerTwo() {

  const answerTwoInput = document.getElementById('answer-two-input');

   const answerTwo = answerTwoInput.value;

  if(answerTwo == "May 2nd, 1972") {
    alert("That's right!");
    hide('question-two');
    show('question-three');
  } else if(answerTwo == "May 2nd 1972") {
    alert("That's right!");
    hide('question-two');
    show('question-three');
  } else {
    alert('Nope.');
  }
}

function submitAnswerThree() {

  const answerThreeInput = document.getElementById('answer-three-input');

  const answerThree = answerThreeInput.value;

  if(answerThree == "goat") {
    alert("That's...correct! Congrats! What a speedrunner you are =D");
    hide('question-three');
    show('done');
  } else if(answerThree == "leaf sheep") {
    alert("Hey, that's my boyfriend's favorite animal! But still, no.");
    hide('question-three');
    show('question-four');
  } else {
    alert("That's a good animal, but no.");
    hide('question-three');
    show('question-four');
  }
}

function submitAnswerFour() {

  const answerFourInput = document.getElementById('answer-four-input');

  const answerFour = answerFourInput.value;

  if(answerFour == '100') {
    alert("Correct!");
    hide('question-four');
    show('question-five');
  } else if(answerFour < 100) {
    alert('Higher than that, actually!');
  } else {
    alert('Lower than that, actually!');
  }
}

function submitAnswerFive() {

  const answerFiveInput = document.getElementById('answer-five-input');

  const answerFive = answerFiveInput.value;

  if(answerFive == 'charon') {
    alert("correct! Thanks for taking my quiz!");
    hide('question-five');
    show('done');
  } else if(answerFive == 'Charon' ) {
     alert("correct! Nice work.");
    hide('question-five');
    show('done');
  } else {
    alert('Nope! If you do not know, Google is your friend. Try again.');
  }
}






// Helper function that takes an ID and shows the element with that ID.
function show(id) {
  const element = document.getElementById(id);
  element.style.display = 'block';
}

// Helper  function that takes an ID and hides the element with that ID.
function hide(id) {
  const element = document.getElementById(id);
  element.style.display = 'none';
}