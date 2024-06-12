 //Paso a paso
    // 1.recupero storage(string)a. si esta vacio(msj)
let recuperoStorage=localStorage.getItem('cartItems')

let lista=document.querySelector(".lista")
let elemtoscarrito='';


//pregunto si hay algo en el storage
if(recuperoStorage== null){

   //b. lleno y parseo
let mensaje= 'tu carrito esta vacio'
let empty= document.querySelector('.empty')
empty.innerText=mensaje
}else{
    carrito=[];
    carrito=JSON.parse(recuperoStorage);
    for (let index = 0; index < carrito.length; index++) {
        const id = carrito[index];
        let url = `https://rickandmortyapi.com/api/character/${id}`

    
    }
}
//2.parse--> array
     //3.agrego a carrito
     //4.stringify
     //5.set item
    
     fetch(url)
     .then(function(response){
         return response.json();
     })
     .then(function(data){
         console.log(data);
        elemtoscarrito+=`<article>
                                <img src=${data.image}>
                                <p>Nombre: ${data.name}</p>
                                <p>Status: ${data.status}</p>
                                <a href="detalle.html?id=${data.id}">Ver más</a>
                            </article>`
                            lista.innerText= elementosCarrito
                            
     })
     .catch(function(e){
        console.log(e);
    })
    