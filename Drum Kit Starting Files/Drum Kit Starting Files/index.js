
//  This will select the first button found
// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//
//   alert("Yep, I got clicked!");
//
// }


//  Detect button pressed
var buttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < buttons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

   // var buttonInnerHTML = this.innerHTML;
   // makeSound(buttonInnerHTML);

   // Call the function to play the sound associated with the button clicked
    makeSound(this.innerHTML);

    // Call the function to animate the btton clicked
    buttonAnimation(this.innerHTML);

  });
}

// Detect key pressed
document.addEventListener("keydown", function (event) {

  // Call the function to play the sound associated with the key pressed
  makeSound(event.key);

  // Call the function to animate the key pressed
  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case"w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
    break;
    case"a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
    break;
    case"s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
    break;
    case"d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
    break;
    case"j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
    break;
    case"k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
    break;
    case"l":
      var kickbass = new Audio('sounds/kick-bass.mp3');
      kickbass.play();
    break;
    default: console.log(key);

  }

}

function buttonAnimation(key) {

// Identify the class for the drum piece clicked/pressed
//  Need to add the .pressed class from the CSS file

  var activeButton = document.querySelector("." + key);

// Add the classpressed to the element
  activeButton.classList.add("pressed");

  // Remove the class pressed from the elemenet afer a specified period of timeout

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);

}
