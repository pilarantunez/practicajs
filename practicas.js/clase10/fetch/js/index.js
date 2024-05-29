let url= '  https://rickandmortyapi.com/api/character '
fetch(url)
	.then(function(response){
	return response.json();
})
	.then(function(data){
	console.log(data);
    let c= document.querySelector('.characterList');
    let characters='';
        for (let i = 0; i < data.results.lenght; i++) {
            characters+=`<article class="character-card">
                            <img src="${data.results[i].image}" alt="${data.results[i].name}">
                            <p>Name: ${data.results[i].name}</p>
                            <p>Status: ${data.results[i].status}</p>
                        </article>`            
        }
        console.log(data.results[3].name)
        console.log(characters);
        
        c.innerHTML =characters;

    })
    
	.catch(function(error){
	console.log('El error es: ' + error);
})
