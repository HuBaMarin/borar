let auxiliar = "";
let min = new Number(0);
let max = new Number(10);
let tries = new Number(3);
let answer = new Number(0);
let IsGameWon = new Boolean(false);
let randomNum = new Number(0);
let number = 30;
let isRandomShow = false;

let lbl_info = document.getElementById("lbl_info");//texto mensaje
let introduccion = document.getElementById("introduccion");//
let lbl_tb = document.getElementById("lbl_tb");
let txt_box = document.getElementById("txt_box");//numero introducido
let accionador = document.getElementById("accionador");
let btn_Boton = document.getElementById("btn_boton");//pulsar
let lbl_intentos = document.getElementById("lbl_intentos");//sacar intentos 
let check = new Boolean(false);//comprobar
//let btn_Shh_click = document.getElementById("btn_Shh_click");
let temporizador = document.getElementById("temporizador");


function cargaPag() {
    //Actualizacion de informacion por texto de elemento HTML
    lbl_info.append("Introduce un número entre " + min + " y " + max + " \n");
    //lbl_info.innerHTML="Introduce un número entre " + min + " y " + max + " \n";
    lbl_intentos.textContent = " Intentos: " + tries;

    //Creacion del numero random a descubrir. Parte del juego.
    randomNum = rand_Calc(min, max);

    cuentaAtras();

    btn_Boton_Click();

}


function rand_Calc(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var nrand = new Number(Math.floor(Math.random() * (max - min + 1) + min));
    console.log(nrand);
    return nrand;
}

function btn_Boton_Click() {
    auxiliar = txt_box.value;
    lbl_tb.textContent = "Inténtalo de nuevo...";
    btn_Boton.innerText = "Pulsar";


    try {
        answer = Number(auxiliar);
    } catch (Excepcion) {
        lbl_tb.textContent = "texto creado. Excepcion" + Excepcion;
    }


    if (tries > 0) {
        if (auxiliar != 0) {
            if (answer == randomNum) {
                console.log("Correcto");
                lbl_info.innerText = "¡ " + auxiliar + " es correcto!";
                IsGameWon = true;
                ResetGame();
            } else if (answer > randomNum) {
                console.log("Prueba más bajo....");
                txt_box.value = "";
                tries--;
                lbl_intentos.innerText = "Intentos: " + tries;
            } else if (answer < randomNum) {
                console.log("Prueba más arriba...");
                txt_box.value = "";
                tries--;
                lbl_intentos.innerText = "Intentos: " + tries;
            }
        }
    } else if (tries === 0) {
        lbl_info.innerText = "Has fallado";
        ResetGame();
    }

}

function ResetGame() {
    btn_Boton.innerText = "¿nuevo juego?";
    txt_box.value = "";
    if (IsGameWon) {
        lbl_info.innerText = "Has ganado";
        number = 0;
    } else {
        lbl_info.innerText = "";
        randomNum = rand_Calc(min, max);
        lbl_info.innerHTML = "Prueba de nuevo";
        tries = 3;
        lbl_intentos.innerText = "Intentos" + tries;
        number = 30;
        //lbl_random.textContent=randomNum;
    }
}


function btn_Shh_click() {
    var lbl_random = document.getElementById('lbl_random');
    if (lbl_random.style.display === "none") {
        lbl_random.style.display === "block";
    } else {
        lbl_random.style.display === "none";
    }
}
function funcionfuera() {

    console.log(number);
    number--;
    temporizador.innerText = "Cuenta atras... " + number;
    if (number === 0) {
        clearInterval(timer);
        ResetGame();
    }

}

function cuentaAtras() {
    const timer = setInterval(funcionfuera());
}


//pulsar
//comprobar bumero con el correcto y sacar mensaje
//cambiar contador de intentos
//si acierto, sacar mensaje
//si fuera intentos, mensaje.