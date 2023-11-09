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

        this.cantidad=0;
    }

    mostrarIngredsSelec() {
        const resultado = document.getElementById("txtHamburguesas");

        this.cantidad = prompt("Cantidad de " + this.nomHam);
        this.sum = this.precio.reduce((acum, valor) => acum + valor);


        resultado.innerHTML += "Has elegido " + this.cantidad + " hamburguesas tipo " + this.nomHam + "<br>";

        resultado.innerHTML += "Ingredientes " + this.nIngr;
    }

    verPrecio() {
        if(this.cantidad>0){
            return this.cantidad*this.sum.toFixed(2);
        }
        

    }
    mostrarPrecioSelec() {
        const resultado = document.getElementById("txtMostrarPrecioHam");
        const sumarPrecios = this.precio.reduce((acumulador, valorAct) => acumulador + valorAct, 0,);
        resultado.innerHTML = sumarPrecios;

    }

}



export { Ingredientes };