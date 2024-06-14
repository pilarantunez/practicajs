let todotrue= true
let formulario = document.querySelector('form');
let nombre= document.querySelector('#fullName');
let telefono= document.querySelector('#phone');
let mail= document.querySelector('#email');
let contrasenia= document.querySelector('#password');
let recontrasenia= document.querySelector('#rePassword');


let invalideName= document.querySelector('.fullName');




formulario.addEventListener('submit', function(event) {
    event.preventDeFault();
    if (nombre.value ==''){
        todotrue=false

    }
    if (telefono.value ==''){
        todotrue=false
    } 
        else if (telefono.value.lenght<8);
        todotrue=false
    
    if (mail.value ==''){
        todotrue=false

    }
    if (contrasenia.value ==''){
        todotrue=false
    }
        else if (contrasenia.value.lenght>3);
            todotrue=false
    if (recontrasenia.value ==''){
        todotrue=false
    }
    else if (recontrasenia.value != contrasenia.value);
    todotrue=false
})
