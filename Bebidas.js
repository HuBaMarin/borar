import { Hamburguesas } from "./Hamburguesas.js";

class Bebidas extends Hamburguesas {

    constructor(nBeb, precio) {
        super(nBeb);
        this.nomBebs = nBeb;
        this.precio = precio;

        this.sum = 0;

        this.cantidad=0;
        this.test = 0;
    }

    mostrarBebidas() {

        const resultado = document.getElementById("txtMostrarBebs");

        this.cantidad = prompt("Numero de " + this.nomBebs);

        this.test=this.precio;

        resultado.innerHTML += "Has elegido " + this.cantidad + " " + this.nomBebs;

    }

    verPrecio() {
        if(this.cantidad>0){
            return this.cantidad*this.test.toFixed(1);
        }
        
        
    }

    elimIngreds() {
        let elim = document.getElementById("elIngr");
        elim.addEventListener("click", funcion, false);
        elim.ingreds = this.nIngr;
        elim.nombre = this.nBeb;
        elim.precio = this.precio;
        function funcion(params) {

            let nomElimin = prompt("pos nom ingr");
            if (params.currentTarget.ingreds.includes(nomElimin))
                params.currentTarget.ingreds.splice(nomElimin, 1);/*elimino ingrediente que selecciona usuario*/
            params.currentTarget.precio.splice(precio, 1);
        }

    }


}



export { Bebidas };