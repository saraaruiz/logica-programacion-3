
const inputFactorial = document.getElementById('factorial');
const btnCalcular = document.getElementById('btnFactorial');
const respuesta = document.getElementById('respuesta');
let factorial = 1;

btnCalcular.addEventListener('click', calcularFactorial);

function calcularFactorial(){
    let inputValue = parseInt(inputFactorial.value);

    if(!isNaN(inputValue)){
        for(let i=inputValue; i>=1; i--){
            factorial *= i;
        }
        mostrarFactorial(factorial,inputValue);
        factorial = 1;
    }else{
        alert('Ingresar un dato válido');
    }
}

function mostrarFactorial(factorial, valor){
    respuesta.innerHTML= `
    El factorial de ${valor} es ${factorial}
    `
}