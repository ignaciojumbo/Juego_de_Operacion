// variables de los numeros de la suma
let num1, num2;
//variable para guardar el resultado
let respuesta;
//varible donde se cargara la opcion correcta
let indiceOpCorrecta;

//varibles para el estilo
let niveles = document.querySelector('.niveles');


//todos los elementos 
let txt_suma = document.getElementById('suma');
let op1 = document.getElementById('op1');
let op2 = document.getElementById('op2');
let op3 = document.getElementById('op3');
let txt_mjs = document.getElementById('msj');
let txt_resultado = document.getElementById('resultado');

let ayuda = 0;


function comenzar() {
    //para que se limpien los campos al iniciar
    txt_resultado.innerHTML = "?";
    txt_mjs.innerHTML = "";

    //genero la suma aleatoria entre 0 y 9
    num1 = Math.round(Math.random() * 9);
    num2 = Math.round(Math.random() * 9);
    respuesta = num1 + num2;

    //asignamos la suma para que se visualize
    txt_suma.innerHTML = num1 + " + " + num2 + " = ";

    //genero un numero entre 0 y 2 para colocar la opcion correcta
    indiceOpCorrecta = Math.round(Math.random() * 2);
    if (indiceOpCorrecta == 0) {
        op1.innerHTML = respuesta;
        op2.innerHTML = respuesta + 1;
        op3.innerHTML = respuesta - 1;
    }
    if (indiceOpCorrecta == 1) {
        op2.innerHTML = respuesta;
        op1.innerHTML = respuesta + 2;
        op3.innerHTML = respuesta - 1;
    }
    if (indiceOpCorrecta == 2) {
        op3.innerHTML = respuesta;
        op1.innerHTML = respuesta + 3;
        op2.innerHTML = respuesta - 1;
    }
}
function medio() {
    //para que se limpien los campos al iniciar
    txt_resultado.innerHTML = "?";
    txt_mjs.innerHTML = "";

    //genero la suma aleatoria entre 0 y 9
    num1 = Math.round(Math.random() * 20);
    num2 = Math.round(Math.random() * 20);
    respuesta = num1 - num2;

    //asignamos la suma para que se visualize
    txt_suma.innerHTML = num1 + " - " + num2 + " = ";

    //genero un numero entre 0 y 2 para colocar la opcion correcta
    indiceOpCorrecta = Math.round(Math.random() * 2);
    if (indiceOpCorrecta == 0) {
        op1.innerHTML = respuesta;
        op2.innerHTML = respuesta + 5;
        op3.innerHTML = respuesta - 7;
    }
    if (indiceOpCorrecta == 1) {
        op2.innerHTML = respuesta;
        op1.innerHTML = respuesta + 3;
        op3.innerHTML = respuesta - 4;
    }
    if (indiceOpCorrecta == 2) {
        op3.innerHTML = respuesta;
        op1.innerHTML = respuesta + 2;
        op2.innerHTML = respuesta - 5;
    }
}
function dificil() {
    //para que se limpien los campos al iniciar
    txt_resultado.innerHTML = "?";
    txt_mjs.innerHTML = "";

    //genero la suma aleatoria entre 0 y 9
    num1 = Math.round(Math.random() * 12);
    num2 = Math.round(Math.random() * 12);
    respuesta = num1 * num2;

    //asignamos la suma para que se visualize
    txt_suma.innerHTML = num1 + " * " + num2 + " = ";

    //genero un numero entre 0 y 2 para colocar la opcion correcta
    indiceOpCorrecta = Math.round(Math.random() * 2);
    if (indiceOpCorrecta == 0) {
        op1.innerHTML = respuesta;
        op2.innerHTML = respuesta + 5;
        op3.innerHTML = respuesta - 7;
    }
    if (indiceOpCorrecta == 1) {
        op2.innerHTML = respuesta;
        op1.innerHTML = respuesta + 3;
        op3.innerHTML = respuesta - 4;
    }
    if (indiceOpCorrecta == 2) {
        op3.innerHTML = respuesta;
        op1.innerHTML = respuesta + 2;
        op2.innerHTML = respuesta - 5;
    }
}

function pro() {
    //para que se limpien los campos al iniciar
    txt_resultado.innerHTML = "?";
    txt_mjs.innerHTML = "";

    //genero la suma aleatoria entre 0 y 9
    num1 = Math.round(Math.random() * 12);
    num2 = Math.round(Math.random() * 12);

    //variable para operacion aleatoria
    let operacion = Math.round(Math.random() * 2);
    if (operacion == 0) {

        respuesta = num1 + num2;
        //asignamos la suma para que se visualize
        txt_suma.innerHTML = num1 + " + " + num2 + " = ";

        //genero un numero entre 0 y 2 para colocar la opcion correcta
        indiceOpCorrecta = Math.round(Math.random() * 2);
        if (indiceOpCorrecta == 0) {
            op1.innerHTML = respuesta;
            op2.innerHTML = respuesta + 5;
            op3.innerHTML = respuesta - 7;
        }
        if (indiceOpCorrecta == 1) {
            op2.innerHTML = respuesta;
            op1.innerHTML = respuesta + 3;
            op3.innerHTML = respuesta - 4;
        }
        if (indiceOpCorrecta == 2) {
            op3.innerHTML = respuesta;
            op1.innerHTML = respuesta + 2;
            op2.innerHTML = respuesta - 5;
        }
    }
    if (operacion == 1) {
        respuesta = num1 - num2;
        //asignamos la suma para que se visualize
        txt_suma.innerHTML = num1 + " - " + num2 + " = ";

        //genero un numero entre 0 y 2 para colocar la opcion correcta
        indiceOpCorrecta = Math.round(Math.random() * 2);
        if (indiceOpCorrecta == 0) {
            op1.innerHTML = respuesta;
            op2.innerHTML = respuesta + 5;
            op3.innerHTML = respuesta - 7;
        }
        if (indiceOpCorrecta == 1) {
            op2.innerHTML = respuesta;
            op1.innerHTML = respuesta + 3;
            op3.innerHTML = respuesta - 4;
        }
        if (indiceOpCorrecta == 2) {
            op3.innerHTML = respuesta;
            op1.innerHTML = respuesta + 2;
            op2.innerHTML = respuesta - 5;
        }
    }
    if (operacion == 2) {
        respuesta = num1 * num2;
        //asignamos la suma para que se visualize
        txt_suma.innerHTML = num1 + " * " + num2 + " = ";

        //genero un numero entre 0 y 2 para colocar la opcion correcta
        indiceOpCorrecta = Math.round(Math.random() * 2);
        if (indiceOpCorrecta == 0) {
            op1.innerHTML = respuesta;
            op2.innerHTML = respuesta + 5;
            op3.innerHTML = respuesta - 7;
        }
        if (indiceOpCorrecta == 1) {
            op2.innerHTML = respuesta;
            op1.innerHTML = respuesta + 3;
            op3.innerHTML = respuesta - 4;
        }
        if (indiceOpCorrecta == 2) {
            op3.innerHTML = respuesta;
            op1.innerHTML = respuesta + 2;
            op2.innerHTML = respuesta - 5;
        }
    }

}
function nivel(op) {
    if (op.innerHTML == 'FACIL') {
        ayuda = 1;
        comenzar()
    }
    if (op.innerHTML == 'MEDIO') {
        ayuda = 2;
        medio()
    }
    if (op.innerHTML == 'DIFICIL') {
        ayuda = 3;
        dificil()
    }
    if (op.innerHTML == 'PRO') {
        ayuda = 4;
        pro()
    }

}

function controlarRespuesta(opcionElejida) {
    txt_resultado.innerHTML = opcionElejida.innerHTML;

    //controlamos si esta bien
    if (respuesta == opcionElejida.innerHTML && ayuda == 1) {
        txt_mjs.innerHTML = "!!!! EXCELENTE !!!";
        txt_mjs.style.color = 'green';
        setTimeout(comenzar, 2000)
    }

    else if (respuesta == opcionElejida.innerHTML && ayuda == 2) {
        txt_mjs.innerHTML = "!!!! EXCELENTE !!!";
        txt_mjs.style.color = 'green';
        setTimeout(medio, 2000)
    }
    else if (respuesta == opcionElejida.innerHTML && ayuda == 3) {
        txt_mjs.innerHTML = "!!!! EXCELENTE !!!";
        txt_mjs.style.color = 'green';
        setTimeout(dificil, 2000)
    }
    
    else if (respuesta == opcionElejida.innerHTML && ayuda == 4) {
        txt_mjs.innerHTML = "!!!! EXCELENTE !!!";
        txt_mjs.style.color = 'green';
        setTimeout(pro, 2000)
    }else {
        txt_mjs.innerHTML = "!!! FALLASTES !!!";
        txt_mjs.style.color = 'red';
    }
    
}
function limpiar() {
    txt_resultado.innerHTML = '?';
    txt_mjs.innerHTML = "";
}





