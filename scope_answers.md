# Exercise 1: What is the value output in the given console.log() statements? Read them and guess before running the code. For each answer, explain (keep it short) why the output came out that way.

# 1.
var lastWord = 'welcome';
console.log(lastWord);
lastWord = 'goodbye';
# Guess:
'welcome'
# Result:
Right!

# 2.
var message = "Up here!";
function shout() {
  console.log(message);
}
shout();
# Guess:
'Up here!'
# Result:
Right!

# 3.
var message = "Up here!";
function shout(message) {
  console.log(message);
}
shout("Down below!")
# Guess:
'Down below!'
# Result:
Yes!

# 4.
var muffins = 'two dozen';
var purchasedMuffins;
function getMuffins() {
  return muffins;
}
purchasedMuffins = getMuffins();
console.log(purchasedMuffins);
# Guess:
'two dozen'
# Result:
Yeah!

# 5.
var chore = 'laundry';
function doChores() {
  var chore = 'sneak out';
  function reportActivity() {
    console.log(chore);
  }
  reportActivity();
}
doChores();
# Guess:
sneak out
# Result:
Right again!

# 6.
var letter;
var contents = 'Looking for gold';
function getMail() {
  function changeContents() {
    var contents = 'Struck it rich!';
  }
  changeContents();
  return contents;
}
letter = getMail();
console.log(letter);
# Guess:
Struck it rich!
# Result:
Looking for gold

  Seems to have occurred because of variable scope.
  i.e., the  'contents' variable inside the getMail function is a different 'contents' from the one outside the function.
  Therefore, the outer 'contents' variable remains unchanged by getMail.
