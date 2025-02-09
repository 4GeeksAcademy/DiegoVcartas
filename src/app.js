import "./style.css";
let num = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let card = ["♦", "♥", "♠", "♣"];

function numeros() {
  //write your code here
  let number = Math.floor(Math.random() * num.length);

  return num[number];
}

function cartas() {
  //write your code here
  let car = Math.floor(Math.random() * card.length);

  return card[car];
}
// document.getElementById('container')..add(cartas());

let icono = cartas(); //se guarda la funcion una vez y se utiliza el mismo resultado

if (icono == "♦") {
  document.getElementById("icono-1").style.color = "red";
  document.getElementById("icono-2").style.color = "red";
} else if (icono == "♥") {
  document.getElementById("icono-1").style.color = "red";
  document.getElementById("icono-2").style.color = "red";
}
document.getElementById("number").innerHTML = numeros();

document.getElementById("icono-1").innerHTML = icono;
document.getElementById("icono-2").innerHTML = icono;