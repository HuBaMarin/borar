import { Ingredientes } from "./Ingredientes.js";
import { Bebidas } from "./Bebidas.js";
import { Patatas } from "./Patatas.js";
import { Nuggets } from "./Nuggets.js";

//Hamburguesas
const hambs = [
  new Ingredientes("Clásicas", ["Carne", "Queso", "Cebolla", "Lechuga", "Tomate", "Pimienta"], [1.2, 1.2, 1.2, 1.2, 1.2, 1.2]),
  new Ingredientes("Veganas", ["Aguacate", "Cebolla", "Lechuga", "Tomate"], [1, 1, 1, 1]),
  new Ingredientes("Picantes", ["Ghost Reaper", "Cheddar", "Salsa", "Cebolla", "Tomate", "Pimienta"], [1.2, 1.2, 1.2, 1.2, 1.2, 1.2]),
  new Ingredientes("Barbacoas", ["Carne", "Salsa", "Cebolla", "Lechuga", "Tomate", "Pimienta"], [1.2, 1.2, 1.2, 1.2, 1.2, 1.2])
];

//Bebidas
const bebs = [
  new Bebidas("Cocacolas", 2.5),
  new Bebidas("Aguas", 1),
  new Bebidas("Fantas de naranja", 2),
  new Bebidas("Fantas de limón", 2)
];

//Patatas
const pttas = [
  new Patatas("Fritas", 2)
];
//Nuggets
const nggts = [
  new Nuggets("Pollo", 2)
];

//mostrar clases
let posHamb = 0;
const botonMostrar = document.getElementById("btnMostrarHam");
botonMostrar.addEventListener("click", () => {
  const resultado = document.getElementById("txtHamburguesas");
  suma1 = 0;
  if (resultado.style.display === "none") {
    resultado.style.display = "block";
  } else {
    resultado.style.display === "none";
  }
  resultado.innerHTML = "";
  posHamb = prompt("0-Clásica 1-Vegana 2-Picante 3-Barbacoa");

  if (posHamb != null) {
    hambs[posHamb].mostrarIngreds();
  } else {
    resultado.style.display = "none";
  }
});
let posBebs = 0;
const botonMostrarBebs = document.getElementById("botonMostrarBebs");
botonMostrarBebs.addEventListener("click", () => {
  const resultado = document.getElementById("txtMostrarBebs");
  if (resultado.style.display === "none") {
    resultado.style.display = "block";
  } else {
    resultado.style.display === "none";
  }
  resultado.innerHTML = "";
  posBebs = prompt("0-Cocacola 1-Agua 2-Fanta de naranja 3-Fanta de limón");

  if (posBebs != null) {
    bebs[posBebs].mostrarBebidas();
  } else {
    resultado.style.display = "none";
  }


});
//patatas
let posPttas = 0;
const btnMostrarPttas = document.getElementById("btnMostrarPttas");
btnMostrarPttas.addEventListener("click", () => {
  const resultado = document.getElementById("txtMostrarPttas");
  if (resultado.style.display === "none") {
    resultado.style.display = "block";
  } else {
    resultado.style.display === "none";
  }
  resultado.innerHTML = "";
  posPttas = prompt("0-Fritas");

  if (posPttas != null) {
    pttas[posPttas].mostrarPatatas();
  } else {
    resultado.style.display = "none";
  }

});

//nuggets
let posNggts = 0;
const btnMostrarNggts = document.getElementById("btnMostrarNggts");
btnMostrarNggts.addEventListener("click", () => {
  const resultado = document.getElementById("txtMostrarNggts");
  if (resultado.style.display === "none") {
    resultado.style.display = "block";
  } else {
    resultado.style.display === "none";
  }
  resultado.innerHTML = "";
  posNggts = prompt("0-Nuggets Pollo");

  if (posNggts != null) {
    nggts[posNggts].mostrarNuggets();
  } else {
    resultado.style.display = "none";
  }

});
//mostrar total
let suma1 = 0;
let suma2 = 0;
let suma3 = 0;
let suma4 = 0;
const btnTotal = document.getElementById("btnTotal");
btnTotal.addEventListener("click", () => {
  const res = document.getElementById("txtTotal");

  if (res.style.display === "none") {
    res.style.display = "block";
  } else {
    res.style.display === "none";
  }
  res.innerHTML = "";

  bebs[posBebs].verPrecio() == "undefined" ? suma1 = 0 : suma1 = bebs[posBebs].verPrecio();
  hambs[posHamb].verPrecio() == "undefined" ? suma2 = 0 : suma2 = hambs[posBebs].verPrecio();
  pttas[posPttas].verPrecio() == "undefined" ? suma3 = 0 : suma3 = pttas[posBebs].verPrecio();
  nggts[posNggts].verPrecio() == "undefined" ? suma4 = 0 : suma4 = nggts[posNggts].verPrecio();
  res.innerHTML = (suma1 + suma2 + suma3 + suma4);
});

//sacar fecha
function tiempo() {
  let ahora = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const timezone = ahora.getHours() + ":" + ahora.getMinutes() + ":" + ahora.getSeconds();

  document.getElementById("fechaPedido").innerHTML = ahora.toLocaleDateString("es-ES", options) + " " + timezone;
}

setInterval(tiempo, 1000);
