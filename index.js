

let btns = document.querySelectorAll('button');

for (i of btns) {
  i.addEventListener('click', function() {
    alert("I got clicked!");
  });
}