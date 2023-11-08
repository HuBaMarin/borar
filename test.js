import { Ingredientes } from "./Ingredientes.js";
import { Bebidas } from "./Bebidas.js";

//,"Vegana","Barbacoa","Pollo,"Clasica""
const hambs = [
  new Ingredientes("Clásica", ["Carne", "Queso", "Cebolla", "Lechuga", "Tomate", "Pimienta"], [1.2, 1.2, 1.2, 1.2, 1.2, 1.2]),
  new Ingredientes("Vegana", ["Aceite", "Queso", "Cebolla", "Lechuga", "Tomate"], [1, 1, 1, 1, 1]),
  new Ingredientes("Pollo", ["Pollo", "Queso", "Salsa", "Lechuga", "Tomate", "Pimienta"], [1.2, 1.2, 1.2, 1.2, 1.2, 1.2]),
  new Ingredientes("Barbacoa", ["Carne", "Salsa", "Cebolla", "Lechuga", "Tomate", "Pimienta"], [1.2, 1.2, 1.2, 1.2, 1.2, 1.2])
];

const bebs = [
  new Bebidas("Cocacola", 2.5),
  new Bebidas("Agua", 1),
  new Bebidas("Fanta de naranja", 2),
  new Bebidas("Fanta de limón", 2)
];

const botonMostrar = document.getElementById("botonMostrar");
botonMostrar.addEventListener("click", () => {
  const resultado = document.getElementById("txtMostrar");
  resultado.innerHTML = "";
  if (resultado.style.display === "none") {
    resultado.style.display = "block";
  } else {
    resultado.style.display = "none";
  }
  
  let pos = prompt("0-C 1-V 2-P 3-B")
  hambs[pos].mostrarIngredsSelec();
});

const botonPrecio = document.getElementById("btnPrecio");
botonPrecio.addEventListener("click", () => {
  const resultado = document.getElementById("resPrecio");
  resultado.innerHTML = "";
  hambs.forEach(hamburguesa => hamburguesa.muestroTotal());
});

