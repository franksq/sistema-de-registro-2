//variables
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");

console.log(numeroUsuario);
/*
Este codigo realiza
la compilacion
*/
if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condicion
    alert('Acertaste, el numero es: ${numeroUsuario}');
}else{
    //la condicion no se cumplio
    alert('Lo siento, no acertaste el numero');
}