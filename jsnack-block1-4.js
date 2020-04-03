// Take all the elements of a numerical array and sum all the ones in an odd position

var result = document.getElementById('result');
var numberArray = [1, 4, 2, 15, 120, 17, 3];
var parity;
var oddSum = 0;

for (var i = 0; i < numberArray.length - 1; i++) {
  parity = checkIndexParity(i);
  if (!parity) {
    oddSum += numberArray[i];
  }
}

result.innerHTML = oddSum;

function checkIndexParity(index){
  var parity;
  if (index % 2 == 0){
    parity = true;
    return parity;
  }
  else {
    parity = false;
    return parity;
  }
}
