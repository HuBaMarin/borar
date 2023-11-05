import {Hamburguesas} from "./Hamburguesas.js";

class Ingredientes extends Hamburguesas {

    constructor(nHam= [], nIngreds= [], precio) {
        super(nHam);
        this.nomHam = nHam; 
        this.nIngr = nIngreds;
        this.precio = precio;
        this.gNoms = [];
    }

    mostrarPrecios() {
        let mostrar = document.getElementById("mostrarHams");
        mostrar.addEventListener("click", funcion, false);
        mostrar.nombre = this.nombresArray;

        function funcion(params) {
            for (var i = 0; i < params.currentTarget.nombre.length; i++) {
                console.log(`${products[i].name} - ${products[i].price}`);
              }
        }
        document.getElementById("verPreciosIngreds").innerHTML = precios;
        
    }

    anadirIngredientes() {
        document.getElementById("anadirIngreds").innerHTML = this.gNoms.push(nombre);
    }

    elimIngreds() {
        document.getElementById("elimIngreds").innerHTML = this.gNoms.splice(pos, 1);

    }

    mostrarIngreds() {
        
         let mostrar = document.getElementById("mostrarIngreds");
        mostrar.addEventListener("click", funcion, false);
        mostrar.nombre = this.nIngr;

        function funcion(params) {
            document.getElementById("textoIngr").innerHTML = params.currentTarget.nombre;
        }
        
    }
}
export {Ingredientes};