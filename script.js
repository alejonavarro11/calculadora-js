window.addEventListener("load", ()=>{
    document.body.classList.remove("preload");
});
let segundoAux;
let aux;
let numero = "";
let calculo = null;
let ultimoOperador;
let reiniciarCalculo = false;

const uno = document.getElementById("btn-uno");
const dos = document.getElementById("btn-dos");
const tres = document.getElementById("btn-tres");
const cuatro = document.getElementById("btn-cuatro");
const cinco = document.getElementById("btn-cinco");
const seis = document.getElementById("btn-seis");
const siete = document.getElementById("btn-siete");
const ocho = document.getElementById("btn-ocho");
const nueve = document.getElementById("btn-nueve");
const cero = document.getElementById("btn-cero");
const btnComa = document.getElementById("btn-coma");
const btnBorrar = document.getElementById("btn-borrar");
const btnInvertir = document.getElementById("btn-invertir");
const btnPorciento = document.getElementById("btn-porciento");
const btnDivision = document.getElementById("dividir");
const btnMultiplicar = document.getElementById("multiplicar");
const btnRestar = document.getElementById("restar");
const btnSumar = document.getElementById("sumar");
const btnIgual = document.getElementById("igual");

const cambiarTexto = document.querySelector(".container .result p");
function operacionPendiente(){
    if (calculo === null) {
        calculo = Number(numero);
    } else {
        aux = Number(numero);
        switch (ultimoOperador) {
            case "+": calculo += aux; break;
            case "-": calculo -= aux; break;
            case "*": calculo *= aux; break;
            case "/": 
                if (aux !== 0) {
                    calculo /= aux; 
                } else {
                    calculo = "Error";
                }
                break;
        }
    }
    cambiarTexto.textContent = calculo;
}
function verificarReinicio(){
    if (reiniciarCalculo){
        numero = "";
        calculo = null;
        reiniciarCalculo = false;
    }
}
// BOTONES DE OPERADORES
const btnMas = btnSumar.addEventListener("click", ()=>{
    btnSumar.style.backgroundColor = "white";
    btnSumar.style.color = "#ff9200"
    
    if (numero !== "") {
        operacionPendiente();
        ultimoOperador = "+";
        numero = "";
    } else {
        ultimoOperador = "+";
    }
    
    reiniciarCalculo = false;
});
btnSumar.addEventListener("blur", () => {
        btnSumar.style.backgroundColor = "#ff9200"; 
        btnSumar.style.color = "white";
});

const btnMenos = btnRestar.addEventListener("click", ()=>{
    btnRestar.style.backgroundColor = "white";
    btnRestar.style.color = "#ff9200"

    if (numero !== "") {
        operacionPendiente();
        ultimoOperador = "-";
        numero = "";
    } else {
        ultimoOperador = "-";
    }
    
    reiniciarCalculo = false;
});
btnRestar.addEventListener("blur", () => {
    btnRestar.style.backgroundColor = "#ff9200"; 
    btnRestar.style.color = "white";
});

const btnProducto = btnMultiplicar.addEventListener("click", ()=>{
    btnMultiplicar.style.backgroundColor = "white";
    btnMultiplicar.style.color = "#ff9200"

    if (numero !== "") {
        operacionPendiente();
        ultimoOperador = "*";
        numero = "";
    } else {
        ultimoOperador = "*";
    }
    
    reiniciarCalculo = false;
});
btnMultiplicar.addEventListener("blur", () => {
    btnMultiplicar.style.backgroundColor = "#ff9200"; 
    btnMultiplicar.style.color = "white";
});

const btnDividir = btnDivision.addEventListener("click", ()=>{
    btnDivision.style.backgroundColor = "white";
    btnDivision.style.color = "#ff9200"

    if (numero !== "") {
        operacionPendiente();
        ultimoOperador = "/";
        numero = "";
    } else {
        ultimoOperador = "/";
    }
    
    reiniciarCalculo = false;

});
btnDivision.addEventListener("blur", () => {
    btnDivision.style.backgroundColor = "#ff9200"; 
    btnDivision.style.color = "white";
});

const btnResultado = btnIgual.addEventListener("click", ()=>{
    if (numero !== "" && ultimoOperador !== "") {
        operacionPendiente();
        ultimoOperador = "";
        numero = "";
        reiniciarCalculo = true;
    }
});
// BOTONES DE LOS NUMEROS

const btnUno = uno.addEventListener("click", ()=>{
    verificarReinicio();
    if (numero === "0"){
        numero = "1";
        cambiarTexto.textContent = numero;
    } else {
        if (numero.length < 10) { 
        numero += "1";
        cambiarTexto.textContent = numero;
    }
    }
});
const btnDos = dos.addEventListener("click", ()=>{
    verificarReinicio();
    if (numero === "0"){
        numero = "2";
        cambiarTexto.textContent = numero;
    } else {
        if (numero.length < 10) { 
        numero += "2";
        cambiarTexto.textContent = numero;
    }
    }
});
const btnTres = tres.addEventListener("click", ()=>{
    verificarReinicio();
    if (numero === "0"){
        numero = "3";
        cambiarTexto.textContent = numero;
    } else {
        if (numero.length < 10) { 
        numero += "3";
        cambiarTexto.textContent = numero;
    }
    }
});
const btnCuatro = cuatro.addEventListener("click", ()=>{
    verificarReinicio();
    if (numero === "0"){
        numero = "4";
        cambiarTexto.textContent = numero;
    } else {
        if (numero.length < 10) { 
        numero += "4";
        cambiarTexto.textContent = numero;
    }
    }
});
const btnCinco = cinco.addEventListener("click", ()=>{
    verificarReinicio();
    if (numero === "0"){
        numero = "5";
        cambiarTexto.textContent = numero;
    } else {
        if (numero.length < 10) { 
        numero += "5";
        cambiarTexto.textContent = numero;
    }
    }
});
const btnSeis = seis.addEventListener("click", ()=>{
    verificarReinicio();
    if (numero === "0"){
        numero = "6";
        cambiarTexto.textContent = numero;
    } else {
        if (numero.length < 10) { 
        numero += "6";
        cambiarTexto.textContent = numero;
    }
    }
});
const btnSiete = siete.addEventListener("click", ()=>{
    verificarReinicio();
    if (numero === "0"){
        numero = "7";
        cambiarTexto.textContent = numero;
    } else {
        if (numero.length < 10) { 
        numero += "7";
        cambiarTexto.textContent = numero;
    }
    }
});
const btnOcho = ocho.addEventListener("click", ()=>{
    verificarReinicio();
    if (numero === "0"){
        numero = "8";
        cambiarTexto.textContent = numero;
    } else {
        if (numero.length < 10) { 
        numero += "8";
        cambiarTexto.textContent = numero;
    }
    }
});
const btnNueve = nueve.addEventListener("click", ()=>{
    verificarReinicio();
    if (numero === "0"){
        numero = "9";
        cambiarTexto.textContent = numero;
    } else {
        if (numero.length < 10) { 
        numero += "9";
        cambiarTexto.textContent = numero;
    }
    }
});
const btnCero = cero.addEventListener("click", ()=>{
    verificarReinicio();
    if (numero === "0"){
        numero = "0";
        cambiarTexto.textContent = numero;
    } else {
        if (numero.length < 10) { 
        numero += "0";
        cambiarTexto.textContent = numero;
    }
    }
});
const borrar = btnBorrar.addEventListener("click", ()=>{
    numero = "";
    calculo = null;
    cambiarTexto.textContent = "0";
});
const invertir = btnInvertir.addEventListener("click", ()=>{
    let valorPantalla = Number(cambiarTexto.textContent);

    if (valorPantalla !== 0) {
        valorPantalla *= -1;
        cambiarTexto.textContent = valorPantalla;

        if (numero !== "") {
            numero = String(valorPantalla);
        } else if (calculo !== null) {
            calculo = valorPantalla;
        }
    }
});
const porcentaje = btnPorciento.addEventListener("click", ()=>{
    let valorPantalla = Number(cambiarTexto.textContent);

    if (valorPantalla !== 0) {
        valorPantalla /= 100;
        cambiarTexto.textContent = valorPantalla;

        if (numero !== "") {
            numero = String(valorPantalla);
        } else if (calculo !== null) {
            calculo = valorPantalla;
        }
    }
});
const coma = btnComa.addEventListener("click", ()=>{
    verificarReinicio();

    if (numero === "") {
        numero = "0.";
    } 
    else if (!numero.includes(".")) {
        numero += ".";
    }
    cambiarTexto.textContent = numero;
});