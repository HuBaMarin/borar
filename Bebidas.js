import { Hamburguesas } from "./Hamburguesas.js";

class Bebidas extends Hamburguesas {

    constructor(nBeb, precio) {
        super(nBeb);
        this.nBeb = nBeb;
        this.precio = precio;

        this.count = 0;

        this.sum = 0;
    }

    mostrarBebidas() {

        const resultado = document.getElementById("mosBebidas");
        resultado.innerHTML += "<p>" + this.nomHam + "</p>";
        resultado.innerHTML += "<p>" + this.nIngr.join(", ") + "</p>";
        resultado.innerHTML += "<p>" + this.precio.join(", ") + "</p>";

    }

    anadirHamburguesas() {
        this.btnPon.addEventListener("click", () => {
            this.count++;
            // console.log(this.count);
        });
    }


    quitarHamburguesas() {
        this.btnQuita.addEventListener("click", () => {
            if (this.count > 0) {
                this.count--;
                // console.log(this.count);
            }
        });
    }


    elimIngreds() {
        let elim = document.getElementById("elIngr");
        elim.addEventListener("click", funcion, false);
        elim.ingreds = this.nIngr;
        elim.nombre = this.nBeb;
        elim.precio= this.precio;
        function funcion(params) {

            let nomElimin = prompt("pos nom ingr");
            if (params.currentTarget.ingreds.includes(nomElimin))
                params.currentTarget.ingreds.splice(nomElimin, 1);/*elimino ingrediente que selecciona usuario*/
                params.currentTarget.precio.splice(precio,1);
        }

    }

    muestroTotal() {

        const resultado = document.getElementById("resPrecio");

        this.sum =this.precio.reduce((acum, valor) => acum + valor);

        this.cantidad=prompt("Cuantas "+this.nomHam+" quieres ?");
        resultado.innerHTML+=this.nomHam+" ";
        resultado.innerHTML+=(this.sum * this.cantidad).toFixed(2)+" ";
       
    }
}



export { Bebidas };