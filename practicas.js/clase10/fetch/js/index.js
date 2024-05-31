let url = 'https://rickandmortyapi.com/api/character';

fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
       
        console.log(data);
        let arrayDePersonajes = data.results;

  
        let seccion = document.querySelector('.container');
        let allCharacters = [];

       
        for(let i=0; i<arrayDePersonajes.length; i++){
           
            allCharacters += `<article>
                                <img src=${arrayDePersonajes[i].image} alt='${arrayDePersonajes[i].name}' />
                                <p>Name: ${arrayDePersonajes[i].name} </p>
                                <p>Status: ${arrayDePersonajes[i].status} </p>
                            </article>`
        }
       
        seccion.innerHTML = allCharacters;

    })
    .catch( function(e){
        console.log(e)
    })
