let show = document.getElementById("result");
let calculation = "";
let calculation_2 = 0;
let result = 0;
let margin = 222;

var ad = false;
var subtract = false;
var multiply = false;
var divided = false;


function add(number){
  if (calculation.length > 6){
    console.log(1);
  } else {
    margin = 222;
      for (var i = 0; i < calculation.length; i++) {
        margin -= 22;
      }
      calculation += number;
      show.style.marginLeft = margin;
      show.innerHTML = calculation;    
  }
}

function side(method){
  if (method == "ad"){
    show.style.marginLeft = margin;
    ad = true;
    calculation_2 = Number(calculation);
    calculation = "";
  }
  else if (method == "subtract"){
    show.style.marginLeft = margin;
    subtract = true; 
    calculation_2 = Number(calculation);
    calculation = "";
  }
  else if (method == "multiply"){
    show.style.marginLeft = margin;
    multiply = true; 
    calculation_2 = Number(calculation);
    calculation = "";
  }
  else if (method == "divided"){
    show.style.marginLeft = margin;
    divided = true; 
    calculation_2 = Number(calculation);
    calculation = "";
  }
  else if (method == "result"){
    if (ad == true) {
      margin = 244
      let sum = calculation_2 + Number(calculation);
      for (var i = 0; i < sum.toString().length; i++) {
        margin -= 22;
      }
      show.style.marginLeft = margin;
      show.innerHTML = sum;
      calculation = sum
    } else if (subtract == true){ 
      margin = 244
      let sum = calculation_2 - Number(calculation);
      for (var i = 0; i < sum.toString().length; i++) {
        margin -= 22;
      }
      show.style.marginLeft = margin;
      show.innerHTML = sum;
      calculation = sum
    } else if (multiply == true){
      margin = 244
      let sum = calculation_2 * Number(calculation);
      for (var i = 0; i < sum.toString().length; i++) {
        margin -= 22;
      }
      show.style.marginLeft = margin;
      show.innerHTML = sum;
      calculation = sum
    } else if (divided == true){
      margin = 244
      let sum = calculation_2 / Number(calculation);
      for (var i = 0; i < sum.toString().length; i++) {
        margin -= 22;
      }
      show.style.marginLeft = margin;
      show.innerHTML = sum;
      calculation = sum
    } 

    ad = false;
    subtract = false;
    multiply = false;
    divided = false;
    
  }
}

function top(method){
  if (method == "ac"){
    calculation = "";
    calculation_2 = 0;
    margin = 222;
    show.style.marginLeft = margin;
    show.innerHTML = "0";
    ad = false;
    subtract = false;
    multiply = false;
    divided = false;
  }
}
