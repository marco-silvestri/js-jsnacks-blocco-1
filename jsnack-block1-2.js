// Ask the user a number, if is even print it, if is odd print the next number


var result = document.getElementById('result');

var myNumber = sanitizedNumericalInput('Please, insert a number:');
result.innerHTML = printEvenSkipOdd(myNumber);

//Force a non-empty numerical input
function sanitizedNumericalInput(question) {
 do {
   usersInputRaw = parseInt(prompt(question).trim());
 } while (usersInputRaw == null || isNaN(usersInputRaw));

 return usersInputRaw;
}

//Check if is a number is Even/Odd. Odd, return the next Even value
function printEvenSkipOdd (number){
  evenOrOdd = 0;
  if (number % 2 == 0) {
    return number;
  }
  else {
    return number + 1;
  }
}
