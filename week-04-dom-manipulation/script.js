
function fillOutputs() {

  let adjectiveOneInput = document.getElementById('adjective-one-input');
  let adjectiveOne = adjectiveOneInput.value;

  
  let adjectiveOneOutput = document.getElementById('adjective-one-output');
  adjectiveOneOutput.innerText = adjectiveOne;

 
  let outputDiv = document.getElementById('output');
  outputDiv.style.display = 'block';

  
  function showGreeting() {

  
  let adjectiveTwoInput = document.getElementById('adjective-two-input');
  let adjectiveTwo = adjectiveTwoInput.value;

  let adjectiveTwoOutput = document.getElementById('adjective-two-output');
  adjectiveTwoOutput.innerText = adjectiveTwo;

  
  let outputDiv = document.getElementById('output');
  outputDiv.style.display = 'block';

  


}
}