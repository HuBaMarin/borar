class Bebidas  {

    constructor(nBeb, precio) {
        this.nomBebs = nBeb;
        this.precio = precio;

        this.sum = 0;

        this.cantidad=0;
        this.test = 0;
    }

    mostrarBebidas() {

        const resultado = document.getElementById("txtMostrarBebs");

        this.cantidad = prompt("Numero de " + this.nomBebs);

        if (this.cantidad!=null) {
            this.test=this.precio;

            resultado.innerHTML += "Has elegido " + this.cantidad + " " + this.nomBebs;
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



export { Bebidas };