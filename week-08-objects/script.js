// Array of objects representing a todo list.
// Modify this array to contain your own list.
const taskArray = [
  {label: 'Play Minecraft', time: 3, energy: 0},
  {label: 'Astronomy notes', time: 2, energy: 3},
  {label: 'Clean room', time: 1, energy: 2},
  {label: 'Register to vote', time: 2, energy: 1},
  {label: 'Get dinner at the Galley', time:4, energy:2},
  {label: 'Watch a show with Peter', time:2, energy: 0.5},
  {label: 'Email professor', time: 1, energy: 1},
  {label: 'Work on English paper', time: 3, energy: 4},
  {label: 'Pick up mail', time: 0.5, energy: 1}

];

// Loads the content into the page.
function loadContent() {
  // This line of code sorts the array alphabetically by the task labels.
  // Modify this to sort your data by a different field, or just delete it.
  taskArray.sort((a, b) => compare(a.label, b.label));

  loadTable();
  loadShortestTask();
  loadeasiestTask();
}

// Adds a task to the array and reloads the page content.
function addNewTask() {
  const newTaskLabel = document.getElementById('label-input').value;
  const newTaskTime = document.getElementById('time-input').value;
  const newTaskEnergy = document.getElementById('energy-input').value;
  const newTask = {label: newTaskLabel, time: newTaskTime, energy: newTaskEnergy };
  taskArray.push(newTask);

  loadContent();
}

// Iterates over the data array to create a table.
function loadTable() {
  const tableElement = document.createElement('table');

  // Create a header row.
  const headerRowElement = document.createElement('tr');
  headerRowElement.appendChild(createElement('th', 'Index'));
  headerRowElement.appendChild(createElement('th', 'Label'));
  headerRowElement.appendChild(createElement('th', 'Time'));
  headerRowElement.appendChild(createElement('th', 'Energy'));
  
  tableElement.appendChild(headerRowElement);

  // Iterate over the array and create a table row for each object.
  for (let i = 0; i < taskArray.length; i++) {
    const task = taskArray[i];
    const rowElement = document.createElement('tr');
    rowElement.appendChild(createElement('td', i));
    rowElement.appendChild(createElement('td', task.label));
    rowElement.appendChild(createElement('td', task.time));
    rowElement.appendChild(createElement('td', task.energy));
    tableElement.appendChild(rowElement);
  }

  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(tableElement);
}

// Displays the name of the shortest task.
function loadShortestTask(){
  // Assume the first task is shortest
  let shortestTask = taskArray[0];

  // Starting with the second task, look for a shorter task
  for (let i = 1; i < taskArray.length; i++) {
    const task = taskArray[i];
    // If this task is shorter than the previous shortest, it's now the shortest
    if(task.time < shortestTask.time) {
      shortestTask = task;
    }
  }
  document.getElementById('shortest-task').innerText = shortestTask.label;
}


function loadeasiestTask(){
  // Assume the first task is shortest
  let easiestTask = taskArray[0];

  // Starting with the second task, look for a shorter task
  for (let i = 1; i < taskArray.length; i++) {
    const task = taskArray[i];
    // If this task is shorter than the previous shortest, it's now the shortest
    if(task.energy < easiestTask.energy) {
      easiestTask = task;
    }
  }
  document.getElementById('easiest-task').innerText = easiestTask.label;
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