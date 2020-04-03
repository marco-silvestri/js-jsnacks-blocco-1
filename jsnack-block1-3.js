// Take 2 array, create 5 combination by iterating array1 + array2

var result = document.getElementById('result');

var listNames = ['Michele', 'Fabio', 'Roberto'];
var listSurnames = ['Forghieri', 'Papagni', 'Marazzini'];
var newName;
var invitedPeeps = [];

for (var i = 0; i < 5; i++) {
  newName = listNames[randomGenie(0,listNames.length -1)] + ' ' + listSurnames[randomGenie(0,listSurnames.length -1)];
  invitedPeeps.push(newName);
}

result.innerHTML = invitedPeeps;

function randomGenie(min, max){
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}
