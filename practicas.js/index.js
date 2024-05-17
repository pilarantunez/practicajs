
//PRACTICA FUNCIONES

/*/1*/
function rectangulo(altura, ancho) {
  return altura * ancho;
}

let altura = 5;
let ancho = 10;
let area = rectangulo(altura, ancho);
console.log("El área del rectángulo es: " + area);

/*/2/*/
function triangulo(alturat, base) {
  return (alturat * base) / 2;
}

let alturat = 5;
let base = 10;
let areat = triangulo(alturat, base);
console.log("El área del triángulo es: " + areat);

/*/3/*/
let largoDelArray = [4, 5, 76, 2, 4, 1, 5, 7, 80];
console.log("La longitud del array es: " + largoDelArray.length);

/*/4*/
function cantidadDeLetras(palabra) {
  return palabra.length;
}
let palabra = "banana";
let cantidad = cantidadDeLetras(palabra);
console.log("La cantidad de letras en " + palabra + " es: " + cantidad);

/*/5*/
function dolarHoy(precioEnPesos, tipoDeCambio) {
  return precioEnPesos / tipoDeCambio;
}

let precioEnPesos = 1000;
let tipoDeCambio = 450; 
let precioEnDolares = dolarHoy(precioEnPesos, tipoDeCambio);
console.log("El precio en dólares es: $" + precioEnDolares);

/*/6*/
function precioFinal(precio, iva) {
  return precio * (1 + iva);
}

let precio = 10;
let iva = 0.21;
let precioMasIva = precioFinal(precio, iva);
console.log("El precio final más un 21% de IVA es de: $ " + precioMasIva);

/*/7*/
function mitad(num) {
  return num / 2;
}

let resultado = mitad(20);
console.log(resultado);


/*/8/*/
function diaSegunNumero(dias, numero) {
  let indice = numero - 1;
  
  if (indice >= 0 && indice < dias.length) {
      return dias[indice];
  } else {
      return "Número fuera de rango";
  }
}



let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let numeroDia = 3;
console.log(diaSegunNumero(diasSemana, numeroDia));  

function siguiente(numero) {
  return numero + 1;
}

function doble(numero) {
  return 2 * numero;
}

function siguienteDelDoble(numero) {
  return siguiente(doble(numero));
}

function anterior(numero) {
  return numero - 1;
}  

function triple(numero) {
  return 3 * numero;
}

function anteriorDelTriple(numero) {
  return anterior(triple(numero));
}


/*/ PRACTICA DE OBJETOS LITERALES/*/

/*/1/*/
let misDatos = {
  nombre: "Pilar",
  apellido: "antunez",
  dni: 12549855,
  comida: ["milanesa", "empanadas", "pizza"]
};

console.log(misDatos.nombre);           
console.log(misDatos.apellido);         
console.log(misDatos.dni);              
console.log(misDatos.comida);            
// Aca uso un array de cadena de texto que almacena las 3 comidas favoritas de una persona

/*/2/*/
let misDatos2 = {
  nombre: "Pilar",
  apellido: "antunez",
  dni: 12549855,
  edad: 20,
  comida: ["milanesa", "empanadas", "pizza"],
  saludar: function() {
      return "Hola, mi nombre es " + this.nombre + " " + this.apellido + " y tengo " + this.edad + " años. Mi primer comida favorita es " + this.comida[0] + ".";
  }
};

console.log(misDatos2.nombre);           
console.log(misDatos2.apellido);  
console.log(misDatos2.dni);    
console.log(misDatos2.edad);    
console.log(misDatos2.comida);   
console.log(misDatos2.saludar());   

/*/3/*/
let auto = {
  marca: "Toyota",
  modelo: "Etios",
  anio: 2022,
  color: "Azul metalico",
  posicion: 0,

  avanzar: function(n) {
      this.posicion += n;
  },

  retroceder: function(n) {
      this.posicion -= n;
  }
};

// Pruebo  mover el auto usando los metodos
auto.avanzar(50);     
auto.retroceder(7);   
auto.avanzar(10);     
auto.retroceder(4);   
console.log("La posición final del auto es: " + auto.posicion); 

/*/4/*/

let nuevoAuto = {
  marca: "Toyota",
  modelo: "Etios",
  anio: 2022,
  color: "Azul metalico",
  posicion: 0,

  moverse: function(n){
    this.posicion+=n;
  }
};
//Pruebo mover el auto usando este nuevo metodo moverse(n)

nuevoAuto.moverse(20);
nuevoAuto.moverse(-4);
nuevoAuto.moverse(15);
console.log("La posición final del auto es: " + nuevoAuto.posicion)

/*/5/*/

//  ironMan
let ironMan = {
  nombre: "Iron Man",
  equipo: "Avengers",
  poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
  energia: 100,
  getPoder: function(index) {
      const poderElegido = this.poderes[index];
      this.energia -= 10;
      if (poderElegido) {
          return `Poder Elegido de ${this.nombre}: ${poderElegido}. Energía restante: ${this.energia}.`;
      }
    
  }
};

// Hulk
let Hulk = {
  nombre: "Hulk",
  equipo: "Avengers",
  poderes: ["Aplastar", "Gritar", "Golpear"],
  energia: 100,
  getPoder: function(index) {
      const poderElegido = this.poderes[index];
      this.energia -= 10;
      if (poderElegido) {
          return `Poder Elegido de ${this.nombre}: ${poderElegido}. Energía restante: ${this.energia}.`;
      }
     
  }
};

console.log(ironMan.getPoder(1));
console.log(Hulk.getPoder(1));

/*/PRACTICA DE BUCLES/*/

//1
for (let i = 0; i < 5; i++) {
  console.log("Practicando con el bucle for");
}

for (let i = 0; i < 10; i++) {
  console.log(`La variable i tiene el valor ${i}`);
}

for (let i = 0; i < 10; i++) {
  console.log(2 * i);
}
for (let i = 0; i < 250; i++) {
  console.log(i);
}
for (let i = 100; i >= 0; i--) {
  console.log(i);
}

//2

const basee = 3;
const resultados = [];

for (let i = 1; i <= 10; i++) {
    resultados.push(base * i);
  
}
console.log(resultados);

//3

let ganancias=[1,-1,3,-6,7,8,4,6,-7,-9];
let sume=0;
for(let i=0;i<ganancias.length; i ++){
  suma+=ganancias[i];
}
console.log(suma);

//4
let healingIsDifficult = [
  'Fear',
  'Drink to Get Drunk',
  'Taken for Granted',
  'Blow It All Away',
  'Get Me',
  'Im Not Important to You',
  'Sober and Unkissed',
  'Healing Is Difficult',
  'Judge Me',
  'Little Man',
  'Insidiously'
];

console.log("Lista de temas:");
for (let i = 0; i < healingIsDifficult.length; i++) {
  console.log(`${i + 1} ${healingIsDifficult[i]}`);
}

//5
let got = [
  {
      nombre: "Jon",
      apellido: "Snow",
      edad: 23,
      ciudad: "Winterfell"
  },
  {
      nombre: "Daenerys",
      apellido: "Targaryen",
      edad: 19
  },
  {
      nombre: "Arya",
      apellido: "Stark",
      edad: 12,
      ciudad: "Winterfell"
  },
  {
      nombre: "Tyrion",
      apellido: "Lannister",
      edad: 32,
      ciudad: "Casterly Rock"
  }
]
/*/
for (let 1=0; i<got.length; i++){
  let persona=got[i];
  console.log('Hola ${persona.nombre} ${persona.apellido}criatura viajera!');
  console.log('soy ${persona.nombre} ${persona.apellido de la ciudad}');
}
/*/
for (let i = 0; i < got.length; i++) {
  let persona = got[i];
  console.log(`Hola ${persona.nombre} ${persona.apellido} criatura viajera!`);
  console.log(`Soy ${persona.nombre} ${persona.apellido} de la ciudad ${persona.ciudad}`);
}










