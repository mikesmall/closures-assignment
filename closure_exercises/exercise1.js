
// Closure example that involves an argument
var printNumberThree = getPrintNumberFunction(3);
var printNumberFive = getPrintNumberFunction(5);

// YOUR CODE HERE ------------------------

function getPrintNumberFunction(theNumber) {
  return function() {
    console.log(theNumber);
  }
};

// ---------------------------------------

printNumberThree(); // 3
printNumberFive(); // 5

// Mike speaking:
// Weird thing about this is, I can just do this:
// > var printNumberFour = 4
// > printNumberFour
// ... and it still outputs...
// 4 
