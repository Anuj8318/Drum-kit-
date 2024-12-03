for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      var ele = this.innerHTML; // Correctly access the innerHTML of the clicked button
  
      makeSound(ele.toUpperCase());
      buttonAnimation(ele.toUpperCase());
      
    });

  }
  document.addEventListener("keypress",function(e){
    makeSound(e.key);
    buttonAnimation(e.key);
  });

function makeSound(e)
{
  switch (e) {
    case "W":
      new Audio('./sounds/crash.mp3').play();
      break;
    case "A":
      new Audio('./sounds/kick-bass.mp3').play();
      break;
    case "S":
      new Audio('./sounds/snare.mp3').play();
      break;
    case "D":
      new Audio('./sounds/tom-1.mp3').play();
      break;
    case "J":
      new Audio('./sounds/tom-2.mp3').play();
      break;
    case "K":
      new Audio('./sounds/tom-3.mp3').play();
      break;
    case "L":
      new Audio('./sounds/tom-4.mp3').play();
      break;
    default:
      alert("Unknown key");
  }
}


// add animation
function buttonAnimation(currentkey) {
  console.log("Current key:", currentkey); // Debugging: Log the key
  var activebutton = document.querySelector("." + currentkey); // Select the button
  if (!activebutton) {
    console.log(`No button found for key: ${currentkey}`); // Debugging: Log missing element
    return; // Exit function if no button is found
  }
  activebutton.classList.add("pressed"); // Add the class
  setTimeout(() => {
    activebutton.classList.remove("pressed"); // Remove the class after 100ms
  }, 100);
}
