function playSound(a) {
  switch (a) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case "j":
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
      break;
    case "k":
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
      break;
    case "l":
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
      break;
    default:
      console.log(a);
  }
}
function buttonAnimation(a) {
  var activeButton = document.querySelector("."+a);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
document.addEventListener("keydown", function(event) {
  playSound(event.key);
  buttonAnimation(event.key);
});
for (var i = 0; i <= 6; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    playSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}
