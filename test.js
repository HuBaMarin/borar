import { Ingredientes } from "./Ingredientes.js";


//,"Vegana","Barbacoa","Pollo,"Clasica""
const hambs = [
  new Ingredientes("Clásica", ["Carne", "Queso", "Cebolla", "Lechuga", "Tomate", "Pimienta"], [1.2, 1.2, 1.2, 1.2, 1.2, 1.2]),
  new Ingredientes("Vegana", ["Aceite", "Queso", "Cebolla", "Lechuga", "Tomate"], [1, 1, 1, 1, 1]),
  new Ingredientes("Pollo", ["Pollo", "Queso", "Salsa", "Lechuga", "Tomate", "Pimienta"], [1.2, 1.2, 1.2, 1.2, 1.2, 1.2]),
  new Ingredientes("Barbacoa", ["Carne", "Salsa", "Cebolla", "Lechuga", "Tomate", "Pimienta"], [1.2, 1.2, 1.2, 1.2, 1.2, 1.2])
];

const bebs = [

]

const botonMostrar = document.getElementById("botonMostrar");
botonMostrar.addEventListener("click", () => {
  const resultado = document.getElementById("txtMostrar");
  resultado.innerHTML = "";
  if (resultado.style.display === "none") {
    resultado.style.display = "block";
  } else {
    resultado.style.display = "none";
  }
  hambs.forEach(hamburguesa => hamburguesa.mostrarIngreds());
});

const botonPrecio = document.getElementById("btnPrecio");
botonPrecio.addEventListener("click", () => {
  const resultado = document.getElementById("resPrecio");
  resultado.innerHTML = "";
  hambs.forEach(hamburguesa => hamburguesa.muestroTotal());
});


/*hambs.forEach(hamburguesa => hamburguesa.elimIngreds());
hambs.forEach(hamburguesa => hamburguesa.muestroTotal());
hambs.forEach(hamburguesa => hamburguesa.elimIngreds());*/