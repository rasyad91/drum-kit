
let numberOfDrums = document.querySelectorAll('button.drum').length;

for (var i = 0; i < numberOfDrums; i++){
  document.querySelectorAll('button.drum')[i].addEventListener('click' , handleClick);
}
// another method of using addEventListener -.addEventListener('click', function() { alert('clicked');})

function handleClick() {
  alert('clicked');
}
