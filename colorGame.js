var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function () {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function () {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});


resetButton.addEventListener("click", function () {
  //gerar novas cores
  colors = generateRandomColors(numSquares);

  //pegar uma nova cor da array
  pickedColor = pickColor();

  //mudar ColorDisplay para as cores que fores pegas(pickedColor)
  colorDisplay.textContent = pickedColor;
  this.textContent = "New Colors"; //mesmo que colocar resetButton.textContent

  //mudar o texto no span (corretc/try again) pra empty
  messageDisplay.textContent = "";

  //mudar as cores dos quadrados
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add cores iniciais aos quadrados
  squares[i].style.backgroundColor = colors[i]

  //add evento de click
  squares[i].addEventListener("click", function () {

    //salvar a cor que foi selecionada
    var clickedColor = this.style.backgroundColor;

    //comparar com a variavel pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!"
      resetButton.textContent = "Play again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again!";
    }
  });
}

function changeColors(color) {
  //loop por todos os quadrados
  for (var i = 0; i < squares.length; i++) {
    //mudar todos os quadrados para a cor escolhida
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//função que gera a quantidade de cores/linhas na array
function generateRandomColors(num) {
  //criar a array
  var arr = [];

  //repetir o num
  for (var i = 0; i < num; i++) {

    //pegar uma cor aleatória e colocar dentro da array
    arr.push(randomColor());
  }
  //retornar a array
  return arr;
}

//função que gera cores em rgb
function randomColor() {
  //"red" de 0 - 255
  var r = Math.floor(Math.random() * 256);

  //"green" de 0 - 255
  var g = Math.floor(Math.random() * 256);

  //"blue" de 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}