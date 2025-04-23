let inputFieldOne = document.getElementById("inputOne");
let inputFieldTwo = document.getElementById("inputTwo");
let showContent = document.getElementById("content");

function showResult() {
  let resultOne = inputFieldOne.value;
  let resultTwo = inputFieldTwo.value;
  resultFirstNumber = parseInt(resultOne);
  resultSecondNumber = parseInt(resultTwo);

  positiveModulo(resultFirstNumber, resultSecondNumber);
}

function positiveModulo(a, b) {
  return (showContent.innerHTML = ((a % b) + b) % b);
}
