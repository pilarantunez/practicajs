let queryString = location.search;
let queryStringObj = new URLSearchParams(location.search);

let query=queryStringObj.get('id');	
console.log(queryStringObj)

let h1=document.querySelector('h1')
let status=document.querySelector('.status')
let especie=document.querySelector('.especie')




fetch(`https://rickandmortyapi.com/api/character/${query}`)
.then (function(response){
    return response.json()
})
.then (function(data){
    console.log(data);

})
.catch(function(error){
    console.log("error: " + error);
})

