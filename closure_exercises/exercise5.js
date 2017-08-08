// Generate another function that requires arguments.
// This time you'll have to set up the flyTo variable yourself.

var personToVisit = "best friend";
// YOUR CODE HERE ------------------------

function flyTo(destination) {
  var personToVisit = "Applesauce McGee";
  console.log("Enjoy your trip to " + destination + " with " + personToVisit + "!!!");
};

// ---------------------------------------

flyTo("Shanghai");
// Enjoy your visit to Shanghai to visit your best friend.
personToVisit = "Toronto"; // (has no effect on next method call)
flyTo("Lagos");
// Enjoy your visit to Lagos to visit your best friend.

// I changed it to the name of my real best friend, Applesauce McGee.
