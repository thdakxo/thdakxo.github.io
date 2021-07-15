var velocityx = 4;
var velocityx2 = 3;
var velocityx3 = 2;
var velocityy = 4;
var velocityy2 = 3;
var velocityy3 = 2;
var positionx = 0;
var positionx2 = 0;
var positionx3 = 0;
var positiony = 0;
var positiony2 = 0;
var positiony3 = 0;
var positionxmin = 0;
var positionxmax = 500;
var positionymin = 0;
var positionymax = 400;
var time = 1;
var reversex = true;
var reversey = true;
var reversex2 = true;
var reversey2 = true;
var reversex3 = true;
var reversey3 = true;
var ball1 = document.getElementById('ball1');
var ball2 = document.getElementById('ball2');
var ball3 = document.getElementById('ball3');

// functions

function myFunction(){
  if(reversex){
    positionx = positionx + velocityx; 
    ball1.style.left = positionx + 'px';
  }
  else{
    positionx = positionx - velocityx; 
    ball1.style.left = positionx + 'px';
  }

  if(reversey){
    positiony = positiony + velocityy; 
    ball1.style.top = positiony + 'px';
  }
  else{
    positiony = positiony - velocityy; 
    ball1.style.top = positiony + 'px';
  }

  if (
    positionx > positionxmax ||
    positionx === positionxmin
  ) {
    reversex = !reversex;
  }

    if (
    positiony > positionymax ||
    positiony === positionymin
  ) {
    reversey = !reversey;
  }

}

function myFunction2(){
    if(reversex2){
      positionx2 = positionx2 + velocityx2 ; 
      ball2.style.left = positionx2 + 'px';
    }
    else{
      positionx2 = positionx2 - velocityx2; 
      ball2.style.left = positionx2 + 'px';
    }
  
    if(reversey2){
      positiony2 = positiony2 + velocityy2; 
      ball2.style.top = positiony2 + 'px';
    }
    else{
      positiony2 = positiony2 - velocityy2; 
      ball2.style.top = positiony2 + 'px';
    }
  
    if (
      positionx2 > positionxmax ||
      positionx2 === positionxmin
    ) {
      reversex2 = !reversex2;
    }
  
    if (
      positiony2 > positionymax ||
      positiony2 === positionymin
    ) {
      reversey2 = !reversey2;
    }
  
}
  
function myFunction3(){
  if(reversex3){
    positionx3 = positionx3 + velocityx3 ; 
    ball3.style.left = positionx3 + 'px';
  }
  else{
    positionx3 = positionx3 - velocityx3; 
    ball3.style.left = positionx3 + 'px';
  }

  if(reversey3){
    positiony3 = positiony3 + velocityy3; 
    ball3.style.top = positiony3 + 'px';
  }
  else{
    positiony3 = positiony3 - velocityy3; 
    ball3.style.top = positiony3 + 'px';
  }

  if (
    positionx3 > positionxmax ||
    positionx3 === positionxmin
  ) {
    reversex3 = !reversex3;
  }

  if (
    positiony3 > positionymax ||
    positiony3 === positionymin
  ) {
    reversey3 = !reversey3;
  }

}

setInterval(myFunction, time);
setInterval(myFunction2, time);
setInterval(myFunction3, time);