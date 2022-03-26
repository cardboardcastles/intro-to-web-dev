let Characters = [
  {FLName: "Taako", Species: "High Elf"},
  {FLName: "Lucretia", Species: "Human"},
  {FLName: "Killian", Species: "Orc"}
];

for (let character of Characters) {

let message = character.FLName 
  + ' from TAZ is a(n) ' 
  + character.Species;
  

document.write (message);
document.write ('<br>');

}