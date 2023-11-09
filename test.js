import { Ingredientes } from "./Ingredientes.js";
import { Bebidas } from "./Bebidas.js";

//,"Vegana","Barbacoa","Pollo,"Clasica""
const hambs = [
  new Ingredientes("Clásicas", ["Carne", "Queso", "Cebolla", "Lechuga", "Tomate", "Pimienta"], [1.2, 1.2, 1.2, 1.2, 1.2, 1.2]),
  new Ingredientes("Veganas", ["Aguacate", "Cebolla", "Lechuga", "Tomate"], [1, 1, 1, 1]),
  new Ingredientes("Picantes", ["Ghost Reaper", "Cheddar", "Salsa", "Cebolla", "Tomate", "Pimienta"], [1.2, 1.2, 1.2, 1.2, 1.2, 1.2]),
  new Ingredientes("Barbacoas", ["Carne", "Salsa", "Cebolla", "Lechuga", "Tomate", "Pimienta"], [1.2, 1.2, 1.2, 1.2, 1.2, 1.2])
];

const bebs = [
  new Bebidas("Cocacolas", 2.5),
  new Bebidas("Aguas", 1),
  new Bebidas("Fantas de naranja", 2),
  new Bebidas("Fantas de limón", 2)
];

//mostrar clases
const botonMostrar = document.getElementById("btnMostrarHam");
botonMostrar.addEventListener("click", () => {
  const resultado = document.getElementById("txtHamburguesas");
  
  if (resultado.style.display === "none") {
    resultado.style.display = "block";
  } else {
    resultado.style.display = "none";
  }
  resultado.innerHTML = "";
  let pos = prompt("0-Clásica 1-Vegana 2-Picante 3-Barbacoa")
  hambs[pos].mostrarIngredsSelec();
});

const botonMostrarBebs = document.getElementById("botonMostrarBebs");
botonMostrarBebs.addEventListener("click", () => {
  const resultado = document.getElementById("txtMostrarBebs");

  if (resultado.style.display == "none") {
    resultado.style.display = "grid";
  } else {
    resultado.style.display = "none";

  }
  resultado.innerHTML = "";
  let pos = prompt("0-Cocacola 1-Agua 2-Fanta de naranja 3-Fanta de limón")
  bebs[pos].mostrarBebidas();
});

//mostrar total
const btnTotal = document.getElementById("btnTotal");
let suma = 0;
btnTotal.addEventListener("click", () => {
  const res = document.getElementById("txtTotal");

  //bebs.forEach(bebida=> res.innerHTML+= +bebida.verPrecio());
  bebs.forEach(bebidas => {
    if (typeof bebidas.verPrecio()!='undefined') {
      suma+=bebidas.verPrecio();
     
    }
  });
  hambs.forEach(hamburguesa => {
    if (typeof hamburguesa.verPrecio()!=='undefined') {
      suma+=hamburguesa.verPrecio();
      res.innerHTML+=suma;
    }
  });
  //=bebs[0].verPrecio()+" "+hambs[0].verPrecio();
});

//hambs[0].verPrecio();



