"use strict";



 //global variables			
let x;
let y;

//Basic operators
const $ = (selector) => document.querySelector(selector);

//function for displaying values
function display(val) {
	$("#ID").value+=val;
  
}



//function for sin
function sin() {
    
     x = $("#ID").value; 
      y = Math.sin(x);
      $("#ID").value = y.toFixed(5)+ "radians";
}


//function for cos
function cos() {
	
    x = $("#ID").value; 
     y = Math.cos(x);
    $("#ID").value = y.toFixed(5)+ "radians";
}


//function for tan
function tan() {
	
     x=$("#ID").value; 
     y=Math.tan(x);
    $("#ID").value = y.toFixed(5)+ "radians";
}


//function for squarroot
function squarroot() {
     x = $("#ID").value;
      y = Math.sqrt(x);
    $("#ID").value = y;
}


//function of square
function square(form) {
    x = $("#ID").value;
    x = eval(x) * eval(x);
}


//function for evaluation
function solve() {
    if(	$("#ID").value==""){
      $("#ID").value =	$("#ID").value;
    }else{
    $("#ID").value = eval($("#ID").value);
    }
  }


//function for clearing the display
function clr() {
        document.getElementById("ID").value = "";
}


//function for log
function logvalue() {
    x = $("#ID").value;
    y = Math.log(x);
    $("#ID").value = y;
}


//function for pi value
function Pivalue() {
    if($("#ID").value.length==0)
    {
        $("#ID").value=Math.PI.toFixed(8);
    }
    else
    {
        $("#ID").value=(Math.PI*($("ID").value)).toFixed(8);
    }
}


//function for backspace
function backspace() {
    x =  $("#ID").value;
    $("#ID").value=x.substr(0,x.length-1);
}


//function of percent
function percent() {
     x = $("#ID").value;
    y =(x)/100;
   $("#ID").value = y;
} 