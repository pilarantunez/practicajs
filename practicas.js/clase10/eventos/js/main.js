// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML 

    let titulo = document.querySelector("#titulo");
    titulo.addEventListener('mouseover', function(){
    let nombre=  prompt("Como es tu nombre?")
    console.log('el nombre es')
    });
        if (nombre==false) {
            let saludo= document.querySelector("#saludo")
            saludo.innerHTML=('bienvenid@');
            titulo.style.display='none'
        }else{
            let saludo= document.querySelector("#saludo")
            saludo.innerHTML('bienvenido'+nombre+"!");
            titulo.style.display='none'
            
        }
        



        
/*/
    let saludo = ("#saludo") ;
        if (nombre==false){

        } 
    let span = ;
 
    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */
    

    /* Asignarle evento a la variable boton */
})