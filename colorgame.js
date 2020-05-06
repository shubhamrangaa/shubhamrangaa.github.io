console.log("connected");
var num = 6;
var box = document.getElementsByClassName("box");
var i;
var head = document.querySelector("h1");
var easybtn = document.getElementById("easybtn");
var hard = document.getElementById("hard");
var hardbtn = document.getElementById("hardbtn")
var colors = randomColors(num);
var pickedColor =  correctColor();
var rgb = document.getElementById("rgb");
var result = document.getElementById("result");
var reset = document.getElementById("resetBtn");

//changing header textContent
rbg.textContent = pickedColor;


// CORRECT COLOR PICKER
function correctColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}


// COLOR ARRAY STORAGE
function randomColors(num){
  var arr = [];
  for(i = 0; i<num; i++){
    arr[i] = colorGenerator();
  }
  return arr;
}


// RANDOM COLOR GENERATOR
function colorGenerator(){
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return "rgb("+ r + ", "+ g +", "+ b +")";
}


// GAME ACTION
for(i=0;i<box.length;i++)
{
  box[i].style.backgroundColor = colors[i];
  box[i].addEventListener("click" ,function()
  {
    var guess = this.style.backgroundColor;

      if(guess == pickedColor)
      {
        result.textContent = "Correct!";
        colorEverything();
      }
      else
      {
        this.style.visibility = "hidden";
        result.textContent = "Try Again!";
      }
    console.log(guess);
  });
}


// VICTORY CHANGES
function colorEverything()
{
  head.style.backgroundColor = pickedColor;
  resetBtn.textContent = "Play Again?"
  for(i=0;i<box.length;i++){
    box[i].style.visibility = "visible";
    box[i].style.backgroundColor = pickedColor;
  }
}


// RESEST button
resetBtn.addEventListener("click", function()
{
  // change num according to active button
  if(easybtn.classList.contains("active"))
    num = 3;
  else
    num = 6;
  alterBoxes(num);
  boxDisplay(num);
  resetBtn.textContent = "New Colors";
  result.textContent = "";

});


//BOX VISIBILITY function
function boxDisplay(num){
  for(i=0;i<box.length;i++)
  {
    box[i].style.display = "none";
  }
  for(i=0;i<num;i++)
  {
    box[i].style.display = "block";
  }
}


// LEVEL TOGGLE
easybtn.addEventListener("click" , function(){
  easybtn.classList.add("active");
  hardbtn.classList.remove("active");
  //generate 3 new Colors
  num = 3;
  alterBoxes(num);
  boxDisplay(num);
  });

hardbtn.addEventListener("click" , function()
{
  hard.style.visibility = "visible";
  hardbtn.classList.add("active");
  easybtn.classList.remove("active");
  num = 6;
  alterBoxes(num);
  boxDisplay(num);
});


// box color on click
function alterBoxes(num){
  colors = randomColors(num);
  //pick right color
  pickedColor =  correctColor();
  //change header
  rbg.textContent = pickedColor;
  //change h 1 background
  head.style.backgroundColor =  "#add0ff" ;
  // change color of squares
  for(i=0;i<box.length;i++)
  {
    box[i].style.backgroundColor = colors[i];
  }
}
