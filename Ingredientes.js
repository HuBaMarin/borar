import { Hamburguesas } from "./Hamburguesas.js";

class Ingredientes extends Hamburguesas {

    constructor(nHam, nIngreds, precio) {
        super(nHam);
        this.nomHam = nHam;
        this.nIngr = nIngreds;
        this.precio = precio;

        this.btnPon = document.getElementById("btnPon");
        this.btnQuita = document.getElementById("btnQuita");
        this.count = 0;

        this.sum = 0;
    }

    mostrarIngredsSelec() {
        const resultado = document.getElementById("txtMostrar");

        resultado.innerHTML += this.nIngr;


    }



    anadirHamburguesas() {
        this.btnPon.addEventListener("click", () => {
            this.count++;

        });
        return this.count;
    }


    quitarHamburguesas() {
        this.btnQuita.addEventListener("click", () => {
            if (this.count > 0) {
                this.count--;
                // console.log(this.count);
            }
        });
    }


    /* anadirIngredientes() {
         let mos2 = document.getElementById("anIngreds");
         mos2.addEventListener("click", funcion, false);
       
         function funcion(params) {
             let nuevoNom = prompt("dime nombre ham poner");
             let nuevoIngred = prompt("dime nuevos ingredientes");
             let nuevoPrecio = prompt("dime nuevos precios");
            
         }
     }*/

    elimIngreds() {
        let elim = document.getElementById("elIngr");
        elim.addEventListener("click", funcion, false);
        elim.ingreds = this.nIngr;
        elim.nombre = this.nomHam;
        elim.precio = this.precio;
        function funcion(params) {

            let nomElimin = prompt("pos nom ingr");
            if (params.currentTarget.ingreds.includes(nomElimin)) {
                params.currentTarget.ingreds.splice(nomElimin, 1);/*elimino ingrediente que selecciona usuario*/
                params.currentTarget.precio.splice(precio, 1);
            }
        }

    }

    muestroTotal() {
        const resultado = document.getElementById("txtMostrar");

        this.sum = this.precio.reduce((acum, valor) => acum + valor);

        this.cantidad = prompt("Cuantas " + this.nomHam + " quieres ?");
        resultado.innerHTML += this.nomHam + " ";
        resultado.innerHTML += (this.sum * this.cantidad).toFixed(2) + "<br>";//muestro precio por seleccion

    }
}



export { Ingredientes };