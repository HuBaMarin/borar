import { Ingredientes } from "./Ingredientes.js";


//,"Vegana","Barbacoa","Pollo,"Clasica""
const hambs = [
  new Ingredientes("Clásica",["Carne", "Queso", "Cebolla", "Lechuga", "Tomate", "Pimienta"],[1.2, 1.2, 1.2, 1.2, 1.2, 1.2]),
  new Ingredientes("Vegana", ["Aceite", "Queso", "Cebolla", "Lechuga", "Tomate"],[1, 1, 1, 1, 1]),
  new Ingredientes("Pollo",["Pollo", "Queso", "Salsa", "Lechuga", "Tomate", "Pimienta"],[1.2, 1.2, 1.2, 1.2, 1.2, 1.2]),
  new Ingredientes("Barbacoa",["Carne", "Salsa", "Cebolla", "Lechuga", "Tomate", "Pimienta"],[1.2, 1.2, 1.2, 1.2, 1.2, 1.2])
];


const displayButton = document.getElementById("botonMostrar");
  displayButton.addEventListener("click", () => {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    hambs.forEach(hamburguesa => hamburguesa.mostrarIngreds());
  });

hambs.forEach(hamburguesa => hamburguesa.anadir());
hambs.forEach(hamburguesa => hamburguesa.quitar());
hambs.forEach(hamburguesa => hamburguesa.muestroTotal());
hambs.forEach(hamburguesa => hamburguesa.elimIngreds());