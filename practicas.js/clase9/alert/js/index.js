/*/1/*/
let mensaje="¿Vas a salir de tu casa?";
let resultado=confirm(mensaje);
if (resultado);{
    
}

//2
let mensaje1=("como te llamas?")
let nombre= prompt(mensaje)
console.log(nombre)

let mensaje2=("cuantos anios tenes?")
let edad= prompt(mensaje2)
console.log(edad)


 let mensaje3=("te gustan lls deportes?")
 let fanDeportes=confirm(mensaje3)
 console.log(fanDeportes)

 let mensaje4= ("Gracias" + nombre+ 'por responder')
 let gracias=alert(mensaje4)

 let usuario={
    nom: nombre,
    age: edad,
    dep: fanDeportes,
    deportistaprof:function(fanDeportes){
        if (fanDeportes==true){
            console.log("Soy fan del deporte");
        } else(fanDeportes!==true)
            console.log("No soy tan fan");

    }
   
}
//segunda parte
//1
let mensaje5=("ingresa un nuemero")
let num= prompt(numero1)
console.log(num)
let mensaje6=("ingresa otro nuemero")
let numm= prompt(numero2)
console.log(numm)
function multiplicar(num, numm) {
    return ("el resultado de multiplicar num1 y num2 es:")+ num * numm;

  }

  //2
let nacionalidad=("ingresa tu nacionalidad")
let nac= prompt(nacionalidad);
console.log(nacionalidad)
let profesion=("ingresa tu profesion")
let prof= prompt(profesion)
console.log(profesion)
let caminar=("cuantos km caminas por dia?")
let km= prompt(caminar)
console.log(caminar)

//b
function filosofoHipster(nac, prof,km){
if (nac== aregentina && prof==musico && km=="2"){
    console.log("Soy un filosofo hipster");
} else
    console.log("No soy tan fan");

}



