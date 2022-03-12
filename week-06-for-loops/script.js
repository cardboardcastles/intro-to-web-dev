// Replace this speeh with your own.
// Notice the `` backticks, which let you split your string into multiple lines.
const speech = `This one's for Badboyhalo
Yo
Why you have lice in your head
Why you got lice in your head
Badboyhalo
You should clean your hair
‘Cause lice is dangerous
My aunt got lice and she died
My uncle got lice and he died
My grandma got lice and she lived
But she lived a really licey life

Yo, get lice off of your head
I don’t want lice on your head
Where are we gonna meet, I’m in the Holy Land right now can you come here quick?

Yeah, Badboyhalo, I bet you’re athletic
‘Cause you can run real, really fast
Meet me at the Holy Land, and help me find some netherite
Why you got lice in your head
Why you got lice in your head`;

// Remove punctuation from the speech. You might have to modify this if your
// speech contains other punctuation.
const speechPunctuationRemoved = speech.replace(',', '').replace('.', '').replace('?','');

// Use a regular expression to split the speech into individual words. You
// shouldn't need to change this, unless you want to split on characters other
// than whitespace.
const wordsArray = speechPunctuationRemoved.split(/\s+/);

// Displays words that have more than 5 characters.
function displayLongWords() {
  const longWordsElement = document.getElementById('long-words');

  // Loop over every word in the array.
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    // If the word has more than 5 characters, display it in the page.
    if(word.length < 4) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      longWordsElement.appendChild(wordElement);
    }
  }
}

function displayCwords
    const CwordsElement = document.getElementById('C-words');



// TODO: Define your own functions here!

function displaySpeechStats() {
  document.getElementById('speech').innerText = speech;

  displayLongWords();

  // TODO: Call your functions here!
}