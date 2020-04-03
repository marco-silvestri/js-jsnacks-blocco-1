//User inputs 2 words, the conosole prints longer word. Use a function to determine longer word

var result = document.getElementById('result');

function askWord (question) {
  var word;
  do {
    word = prompt(question);
  } while (word == '' || word == null );

  return word;
}

function longerWord(firstStr, secondStr) {
  if (firstStr.length > secondStr.length) {
    return firstStr;
  }
  else if (firstStr.length < secondStr.length){
    return secondStr;
  }
  else {
    return 'Cannot determine the longest word between ' + firstStr + ' and ' + secondStr;
  }
}

var firstWord = askWord('Insert the first word...');
var secondWord = askWord('Insert the second word...');

var theLongerIs = longerWord(firstWord, secondWord);

result.innerHTML = theLongerIs;
