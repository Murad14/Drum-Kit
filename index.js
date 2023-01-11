let btns = document.querySelectorAll('.drum');

for (i of btns) {
  i.addEventListener('click', function() {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();

  });
}


