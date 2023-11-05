import { Hamburguesas } from "./Hamburguesas.js";
import { Ingredientes } from "./Ingredientes.js";


const hamburguesa= ["Clásica"];
//,"Vegana","Mexicana","Barbacoa","Pollo"
const ingredsClásica = [
    { nombre: "Apple", price: 0.99 },
    { nombre: "Banana", price: 1.29 },
    { nombre: "Orange", price: 1.99 }
  ];
  const ingredsClásica2 = [
    { nombre: "Apple", price: 0.99 },
    { nombre: "Banana", price: 1.29 },
    { nombre: "Orange", price: 1.99 }
  ];
  const ingredsClásica3 = [
    { nombre: "Apple", price: 0.99 },
    { nombre: "Banana", price: 1.29 },
    { nombre: "Orange", price: 1.99 }
  ];
  const ingredsClásica4 = [
    { nombre: "Apple", price: 0.99 },
    { nombre: "Banana", price: 1.29 },
    { nombre: "Orange", price: 1.99 }
  ];
  const ingredsClásica5 = [
    { nombre: "Apple", price: 0.99 },
    { nombre: "Banana", price: 1.29 },
    { nombre: "Orange", price: 1.99 }
  ];

// Create an array of objects with name and price properties
var products = [
  { name: "Apple", price: 0.99 },
  { name: "Banana", price: 1.29 },
  { name: "Orange", price: 1.99 }
];

// Function to display the array
function showProducts() {
  console.log("Products:");
  for (var i = 0; i < products.length; i++) {
    console.log(`${products[i].name} - ${products[i].price}`);
  }
}

// Call the function to display the array
showProducts();*/

const precios = [12.11,11.11,10.10,9,8];
/*let hams = new Hamburguesas(hamburguesa);*/

/*hams.mostrarHams();

hams.ponerHams();

hams.elimHams();*/

let laclasica = new Ingredientes(hamburguesa,ingredsClásica,precios);
