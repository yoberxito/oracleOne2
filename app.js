
let numeroSecreto ;

let intentos = 0;
let listaNumerosSorteados=[];
let numeroMaximo=2;

function asignarTextoElemento(elemento,texto){
    let elementoHtmal=document.querySelector(elemento);
    elementoHtmal.innerHTML = texto;
    return;

}



function verificarEvento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario))
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto))
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario==numeroSecreto)
    console.log(intentos)
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en   ${intentos} ${(intentos==1)?'vez':'veces'}`)
        document.getElementById(`reiniciar`).removeAttribute(`disabled`)
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El mumero secreto es menor')
        }else{
            asignarTextoElemento('p','El mumero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return ;

}
function limpiarCaja(){
   let valorCaja =document.querySelector(`#valorUsuario`).value='';
        
}

function generarNumeroSecreto() {
     let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
     console.log(numeroGenerado);
     console.log(listaNumerosSorteados);

     if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles');

     }else{

     

    if(listaNumerosSorteados.includes(numeroGenerado)){
        console.log("HOLA")
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
     
    
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!')
    asignarTextoElemento('p',`Indicar un número del 1 al ${numeroMaximo}`)
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}
function reiniciarJuego(){
    //restaurar el juego
    limpiarCaja();
    //limpiar mensaje de inicio
    condicionesIniciales();
    //generar el numero aleatorio
   document.querySelector(`#reiniciar`).setAttribute(`disabled`,`true`)
    
    //desa¿
}
condicionesIniciales();
