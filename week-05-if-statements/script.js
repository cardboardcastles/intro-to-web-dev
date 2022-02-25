// When this function is called, it takes the user's answer to the first
// question and uses if statements to check whether it's correct.
function submitAnswerOne() {
  // Get answer one's input element
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

// When this function is called, it takes the user's answer to the second
// question and uses if statements to check whether it's correct.
function submitAnswerTwo() {
  // Get answer two's input element
  const answerTwoInput = document.getElementById('answer-two-input');
  // Get the number from answer two's input element
   const answerTwo = answerTwoInput.value;

  if(answerTwo == "May 2nd, 1972") {
    alert("That's right!");
    hide('question-two');
    show('answer-three');
  } else if(answerTwo == "May 2nd 1972") {
    alert("That's right!");
    hide('question-two');
    show('question-three');
  } else {
    alert('The answer is lower.');
  }
}

function submitAnswerThree() {
  // Get answer two's input element
  const answerThreeInput = document.getElementById('answer-three-input');
  // Get the number from answer two's input element
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
  // Get answer one's input element
  const answerFourInput = document.getElementById('answer-four-input');
  // Get the text from answer one's input element
  const answerFour = answerFourInput.value;

  if(answerFour == '') {
    alert("yes");
    hide('question-four');
    show('question-five');
  } else if(answerFour == '') {
    alert('oh, how funny and clever you are. Try that again.');
  } else {
    alert('...try again.');
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