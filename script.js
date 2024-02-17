// count per click.
var questioncount = 0;

// variables for result.
var asian = 0;
var american = 0;
var african = 0;
var latino = 0;

// get the results from html.
var result = document.getElementById("result");
var resultpic = document.getElementById("resultpic");

//get all the id's of button from html.
//question 1 DOM.
var q1a = document.getElementById("q1a");
var q1b = document.getElementById("q1b");
var q1c = document.getElementById("q1c");
var q1d = document.getElementById("q1d");

//question 2 DOM
var q2a = document.getElementById("q2a");
var q2b = document.getElementById("q2b");
var q2c = document.getElementById("q2c");
var q2d = document.getElementById("q2d");

//question 3 DOM.
var q3a = document.getElementById("q3a");
var q3b = document.getElementById("q3b");
var q3c = document.getElementById("q3c");
var q3d = document.getElementById("q3d");

//question 4 DOM.
var q4a = document.getElementById("q4a");
var q4b = document.getElementById("q4b");
var q4c = document.getElementById("q4c");
var q4d = document.getElementById("q4d");

//question 5 DOM.
var q5a = document.getElementById("q5a");
var q5b = document.getElementById("q5b");
var q5c = document.getElementById("q5c");
var q5d = document.getElementById("q5d");

// adding event Listener
//Q1
q1a.addEventListener("click", asianScore);
q1b.addEventListener("click", americanScore);
q1c.addEventListener("click", africanScore);
q1d.addEventListener("click", latinoScore);

//Q2
q2a.addEventListener("click", asianScore);
q2b.addEventListener("click", americanScore);
q2c.addEventListener("click", africanScore);
q2d.addEventListener("click", latinoScore);

//Q3
q3a.addEventListener("click", asianScore);
q3b.addEventListener("click", americanScore);
q3c.addEventListener("click", africanScore);
q3d.addEventListener("click", latinoScore);

//Q4
q4a.addEventListener("click", asianScore);
q4b.addEventListener("click", americanScore);
q4c.addEventListener("click", africanScore);
q4d.addEventListener("click", latinoScore);

//Q5
q5a.addEventListener("click", asianScore);
q5b.addEventListener("click", americanScore);
q5c.addEventListener("click", africanScore);
q5d.addEventListener("click", latinoScore);

// functions of the quiz.
// for asian
function asianScore() {
  asian += 1;
  questioncount += 1;
  if (questioncount >= 4) {
    updateResult();
  }
}

// for american 
function americanScore() {
  american += 1;
  questioncount += 1;
  if (questioncount >= 4) {
    updateResult();
  }
}

// for african
function africanScore() {
  african += 1;
  questioncount += 1;
  if (questioncount >= 4) {
    updateResult();
  }
}

//for latino.
function latinoScore() {
  latino += 1;
  questioncount += 1;
  if (questioncount >= 4) {
    updateResult();
  }
}

// function of the updateResult.

function updateResult() {
  if (asian >= 4) {
    result.innerHTML = "You are Asian";
    resultpic.innerHTML = "<img src='assests/asian.jpeg'>";
  }
  else if (american >= 4) {
    result.innerHTML = "You are American";
    resultpic.innerHTML = "<img src='assests/american.jpeg'>";
  }
  else if (african >= 4) {
    result.innerHTML = "You are African";
    resultpic.innerHTML = "<img src='assests/african.jpg'>";
  }
  else if (latino >= 4) {
    result.innerHTML = "You are Latino";
    resultpic.innerHTML = "<img src='assests/latino.jpeg'>";
  }
  else {
    result.innerHTML = "You have mixed personality";
    resultpic.innerHTML = "<img src= 'assests/mixed.jpeg'>";
  }
}

// disable the button when clicked.
//Q1
q1a.addEventListener("click", disableQ1);
q1b.addEventListener("click", disableQ1);
q1c.addEventListener("click", disableQ1);
q1d.addEventListener("click", disableQ1);

//define the function.
function disableQ1() {
  q1a.disabled = true;
  q1b.disabled = true;
  q1c.disabled = true;
  q1d.disabled = true;
}

//Q2
q2a.addEventListener("click", disableQ2);
q2b.addEventListener("click", disableQ2);
q2c.addEventListener("click", disableQ2);
q2d.addEventListener("click", disableQ2);

//define the function.
function disableQ2() {
  q2a.disabled = true;
  q2b.disabled = true;
  q2c.disabled = true;
  q2d.disabled = true;
}

//Q3
q3a.addEventListener("click", disableQ3);
q3b.addEventListener("click", disableQ3);
q3c.addEventListener("click", disableQ3);
q3d.addEventListener("click", disableQ3);

//define the function.
function disableQ3() {
  q3a.disabled = true;
  q3b.disabled = true;
  q3c.disabled = true;
  q3d.disabled = true;
}

//Q4
q4a.addEventListener("click", disableQ4);
q4b.addEventListener("click", disableQ4);
q4c.addEventListener("click", disableQ4);
q4d.addEventListener("click", disableQ4);

//define the function.
function disableQ4() {
  q4a.disabled = true;
  q4b.disabled = true;
  q4c.disabled = true;
  q4d.disabled = true;
}

//Q5
q5a.addEventListener("click", disableQ5);
q5b.addEventListener("click", disableQ5);
q5c.addEventListener("click", disableQ5);
q5d.addEventListener("click", disableQ5);

//define the function.
function disableQ5() {
  q5a.disabled = true;
  q5b.disabled = true;
  q5c.disabled = true;
  q5d.disabled = true;
}
//restart the quiz.
var restart = document.getElementById("restart");
restart.addEventListener("click", restartQuiz);

//define the restart function.

function restartQuiz() {
  result.innerHTML = "";
  resultpic.innerHTML = "";

// reset the values
  questioncount = 0;
  asian = 0;
  american = 0;
  african = 0;
  latino = 0;

  // enable the button
  q1a.disabled = false;
  q1b.disabled = false;
  q1c.disabled = false;
  q1d.disabled = false;
  q2a.disabled = false;
  q2b.disabled = false;
  q2c.disabled = false;
  q2d.disabled = false;
  q3a.disabled = false;
  q3b.disabled = false;
  q3c.disabled = false;
  q3d.disabled = false;
  q4a.disabled = false;
  q4b.disabled = false;
  q4c.disabled = false;
  q4d.disabled = false;
  q5a.disabled = false;
  q5b.disabled = false;
  q5c.disabled = false;
  q5d.disabled = false;

  //scroll to the top
  (window).scrollTo(0, 0);

}
