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

    mostrarIngreds() {
        const resultado = document.getElementById("txtHamburguesas");

        this.cantidad = prompt("Cantidad de " + this.nomHam);

        if (this.cantidad!=null) {
            this.sum = this.precio.reduce((acum, valor) => acum + valor);

            resultado.innerHTML += "Has elegido " + this.cantidad + " hamburguesas tipo " + this.nomHam + "<br>";
    
            resultado.innerHTML += "Ingredientes " + this.nIngr;
        }else{
            resultado.style.display="none";
        }
       
    }

    verPrecio() {
        if(this.cantidad>0){
            return this.cantidad*this.sum;
        }else{
            return 0;
        }
        

    }
    mostrarPrecioSelec() {
        const resultado = document.getElementById("txtMostrarPrecioHam");
        const sumarPrecios = this.precio.reduce((acumulador, valorAct) => acumulador + valorAct, 0,);
        resultado.innerHTML = sumarPrecios;

    }

}



export { Ingredientes };