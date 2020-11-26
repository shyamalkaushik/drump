var noofbuttons=document.querySelectorAll(".drum").length;
for (var i=0;i<noofbuttons;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function () {

var buttonclick=this.innerHTML;
//console.log(this.style.color="white")
console.log(buttonclick);
makesound(buttonclick);
addAnimaton(buttonclick);
  });}
  document.addEventListener("keypress",function(event){
    console.log(event.key);
makesound(event.key);
addAnimaton(event.key);

  })
function makesound(key){
  switch (key) {
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
      var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();

      break;
      case "l":
      var audio = new Audio('sounds/crash.mp3');
    audio.play();

      break;

    default:

  }

}
function addAnimaton(currentkey){
  var keypres=document.querySelector("."+currentkey);
  keypres.classList.add("pressed");
  setTimeout(function(){
  keypres.classList.remove("pressed"); },100);
}
