
var zero = document.getElementById('answer');

zero.addEventListener("mouseover", ChangeZeroColor);

function ChangeZeroColor(){
  zero.style.color = "black";
}


var dough = document.getElementById('donut');
dough.addEventListener("mouseover", ChangeBgColor);

function ChangeBgColor(){
  dough.style.backgroundColor = "black";
}

var rect = document.getElementById('rectangle');
rect.addEventListener("mouseover", ChangeRectColor);

function ChangeRectColor(){
  rect.style.backgroundColor = "black";
}

var tri = document.getElementById('triangle2');
tri.addEventListener('mouseover', ChangeTriColor);

function ChangeTriColor(){
  tri.style.bordertopColor = "black";
}

var button = document.getElementById("button");

button.addEventListener('click', function(){
  button.style.opacity = 0;
  console.log("test")
})

// var whole = document.getElementById("button");
//
// whole.addEventListener{'click', function(){
// whole.style.opacity = 0;
// })


var don = document.getElementById('just');
don.addEventListener('mouseover', ChangeDoColor);

function ChangeDoColor(){

  don.style.color ="black";
}
