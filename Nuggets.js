class Nuggets  {

    constructor(nNggts, precio) {
        this.nomNggts = nNggts;
        this.precio = precio;

        this.sum = 0;

        this.cantidad=0;
        this.test = 0;
    }

    mostrarNuggets() {

        const resultado = document.getElementById("txtMostrarNggts");

        this.cantidad = prompt("Numero de " + this.nomNggts);

        if (this.cantidad!=null) {
            this.test=this.precio;

            resultado.innerHTML += "Has elegido " + this.cantidad + " " + this.nomNggts;
        }else{
            resultado.style.display="none";
        }

    }

    verPrecio() {
        if(this.cantidad>0){
            return this.cantidad*this.test;
        }else{
            return 0;
        }
    }

}
export {Nuggets};