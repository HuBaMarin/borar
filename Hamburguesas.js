export class Hamburguesas {
    constructor(nombre = []) {
        this.nombresArray = nombre;
    }

    mostrarHams() {
        let mostrar = document.getElementById("mostrarHams");
        mostrar.addEventListener("click", funcion, false);
        mostrar.nombre = this.nombresArray;//nombre items de primer colum

        function funcion(params) {
            document.getElementById("test").innerHTML = params.currentTarget.nombre;
        }
    }

    ponerHams() {

        let mos2 = document.getElementById("anadirHams");
        mos2.addEventListener("click", funcion, false);
        mos2.nombres = this.nombresArray;
        function funcion(params) {
            let nuevoNom = prompt("dime nombre ham");
            params.currentTarget.nombres.push(nuevoNom);
        }
    }

    elimHams() {
        let elim = document.getElementById("elimHams");
        elim.addEventListener("click", funcion, false);
        elim.nombres = this.nombresArray;
        function funcion(params) {
            let nuevoNom = prompt("dime nombre ham");
            if(params.currentTarget.nombres.includes(nuevoNom))
                params.currentTarget.nombres.splice(params.currentTarget.nombres.indexOf(nuevoNom), 1);
            
           
        }
    }
}