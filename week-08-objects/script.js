let Characters = [
 
  {FLName: "Taako", 
  RC: {Race: 'High Elf', Class: 'Wizard'},
  Quote: [' "Hail and well met, my dudes!" ']
  },
  
  {FLName: "Magnus", 
   RC: {Race: 'Human', Class: 'Fighter'},
  Quote: [' "Do good recklessly!" ']
  },
  
  {FLName: "Merle", RC: {Race: 'Dwarf', Class: 'Cleric'},
  Quote: [' "I find joy in...life!" ']},
  
];

for (let character of Characters) {

let message = character.FLName 
  + ' from TAZ is a(n) ' 
  + character.RC.Race
  + ' ' + character.RC.Class;
  

document.write (message);
document.write ('<br>');


for (let topic of character.Quote) {
  document.write('<br> <i> this character is known for saying' + topic + '</i> <br>' + '<br>');
  
}

}