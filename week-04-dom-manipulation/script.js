
// When this function is called, it takes the values from the inputs and adds
// them to the outputs.
function fillOutputs() {

  // Get the adjective input element
  let adjectiveOneInput = document.getElementById('adjective-one-input');
  // Get the text from the input element
  let adjectiveOne = adjectiveOneInput.value;

  // Get the adjective output element
  let adjectiveOneOutput = document.getElementById('adjective-one-output');
  // Set the text of the input element
  adjectiveOneOutput.innerText = adjectiveOne;

  // Get the output container element
  let outputDiv = document.getElementById('output');
  // Make the output container element visible
  outputDiv.style.display = 'block';


function showGreeting() {
let adjectiveTwoInput = document.getElementById ('adjective-two-input');

let adjectiveTwo = adjectiveTwoInput.value;

let adjectiveTwoOutput = document.getElementById ('adjective-two-output');
adjectiveTwoOutput.innerText = adjectiveTwo

let outputDiv = document.getElementById('output2');
outputDiv.style.display = 'block';
 




}
}