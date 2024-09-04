const solution = document.getElementById("problem");

function appendProblem(input){
  solution.value += input;
}

function clearProblem(){
  solution.value = "";
}

function solveProblem(){
  solution.value = eval(solution.value);
}