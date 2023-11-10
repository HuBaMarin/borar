class Patatas  {

    constructor(nPtta, precio) {
        this.nomPtts = nPtta;
        this.precio = precio;

        this.sum = 0;

        this.cantidad=0;
        this.test = 0;
    }

    mostrarPatatas() {

        const resultado = document.getElementById("txtMostrarPttas");

        this.cantidad = prompt("Numero de " + this.nomPtts);

        if (this.cantidad!=null) {
            this.test=this.precio;

            resultado.innerHTML += "Has elegido " + this.cantidad + " " + this.nomPtts;
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
export {Patatas};