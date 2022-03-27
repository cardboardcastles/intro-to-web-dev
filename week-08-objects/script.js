 // Array of objects representing a todo list.
// Modify this array to contain your own list.
const Characters = [
  {CharacterName: "Taako", 
  Quote: [' "Hail and well met, my dudes!" ']
  },
  
  {CharacterName: "Magnus", 
  Quote: [' "Do good recklessly!" ']
  },
  
  {CharacterName: "Merle",
  Quote: [' "I find joy in...life!" ']},
  
];

// Loads the content into the page.
function loadContent() {
  // This line of code sorts the array alphabetically by the task names.
  // Modify this to sort your data by a different field, or just delete it.
  Characters.sort((a, b) => compare(a.name, b.name));

  loadTable();
  loadShortestTask();
}

// Adds a task to the array and reloads the page content.
function addNewCharacter() {
  const NewCharacterName = document.getElementById('name-input').value;
  const NewCharacterQuote = document.getElementById('time-input').value;
  const NewCharacter = {name: NewCharacterName, time: newTaskTime };
  Characters.push(NewCharacter);

  loadContent();
}

// Iterates over the data array to create a table.
function loadTable() {
  const tableElement = document.createElement('table');

  // Create a header row.
  const headerRowElement = document.createElement('tr');
  headerRowElement.appendChild(createElement('th', 'Index'));
  headerRowElement.appendChild(createElement('th', 'Name'));
  headerRowElement.appendChild(createElement('th', 'Quote'));
  tableElement.appendChild(headerRowElement);

  // Iterate over the array and create a table row for each object.
  for (let i = 0; i < Characters.length; i++) {
    const task = Characters[i];
    const rowElement = document.createElement('tr');
    rowElement.appendChild(createElement('td', i));
    rowElement.appendChild(createElement('td', Character.Name));
    rowElement.appendChild(createElement('td', Character.Quote));
    tableElement.appendChild(rowElement);
  }

  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(tableElement);
}

// Displays the name of the shortest task.
function loadShortestTask(){
  // Assume the first task is shortest
  let shortestTask = Characters[0];

  // Starting with the second task, look for a shorter task
  for (let i = 1; i < Characters.length; i++) {
    const task = Characters[i];
    // If this task is shorter than the previous shortest, it's now the shortest
    if(task.time < shortestTask.time) {
      shortestTask = task;
    }
  }
  document.getElementById('shortest-task').innerText = shortestTask.name;
}

// Helper function that creates an element that contains text content.
function createElement(tag, text) {
  const element = document.createElement(tag);
  element.innerText = text;
  return element;
}

// Helper function that compares two values.
// Works on strings, numbers, and dates.
function compare(valueOne, valueTwo) {
  // valueOne comes before valueTwo
  if (valueOne < valueTwo) {
    return -1;
  }

  // valueOne comes after valueTwo
  if (valueOne > valueTwo) {
    return 1;
  }

  // valueOne and valueTwo are equal
  return 0;
}