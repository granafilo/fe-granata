// Esercizio 2.1
let nome  = "Filippo";
const annoNascita = "2004";

console.log(nome, annoNascita);

// Esercizio 2.2
let a,b;
console.log((a+b));
console.log(a-b);
console.log(a*b);
console.log(a/b);


// Esercizio 2.3
let prezzo = 49.90;
const SCONTO = 20;
let prezzoScontato = prezzo - (prezzo * SCONTO / 100);

console.log(prezzoScontato);

// Esercizio 2.4
let intero = 19;
let stringa = "Ciao";
let und = undefined;
let nullo = null;
let bool = true;
console.log(typeof(intero));
console.log(typeof(stringa));
console.log(typeof(und));
console.log(typeof(nullo));
console.log(typeof(bool));


// Esercizio 2.5
stringa = "123";
stringa = parseInt(stringa);
console.log((stringa+7));

// Esercizio 2.6
console.log("5" + 3);
// prevedo output pari a "53"

console.log("5" - 3);
// prevedo output pari a "2" 

console.log("5" * "2");
// prevedo output pari a "10"

console.log(true + 1);
// prevedo output pari a "2"

console.log(false + "ciao");
// prevedo output pari a "0ciao"
// risultato "falseciao"

// Esercizio 2.7
let eta = 17;
let haPermesso = true;

if(eta >= 18 || haPermesso){
    console.log(true);
}else{
    console.log(false);
}

// Esercizio 2.8
nome = "filippo";
let cognome = "granata";
eta = 21;

console.log(`Ciao mi chiamo ${nome} nome ${cognome} ho ${eta} anni!`);

// Esercizio 2.9
let secondi = 3661;
let minuti = Math.floor(secondi/60);
secondi = secondi % 60;
// console.log(minuti, secondi);
let ore = Math.floor(minuti/60);
minuti = minuti % 60;

console.log("ore",ore, "minuti", minuti, "secondi", secondi);
// controllo che il calcolo sia corretto
console.log(ore*60*60 + minuti*60 + secondi);

// Esercizio 2.10
a = 9;
b = 10;
console.log(a,b);

[a,b] = [b,a];
console.log(a,b);

// Esercizio 2.11
a = 10;
console.log(Boolean(a % 2 == 0 ));

// Esercizio 2.12
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// Esercizio 2.13
const PI = Math.PI;
let raggio = 4;

let area = PI * Math.pow(2, raggio);
let circonferenza = 2 * raggio * PI;

console.log(area.toFixed(3), circonferenza.toFixed(3));

// Esercizio 2.14
let euro = 3.14;
let dollari = euro*1.17;
let sterline = euro * 0.87;
let yen = euro * 186.69;

console.log(euro, dollari, sterline, yen);

// Esercizio 2.15
minuti = 250;
ore = Math.floor(minuti/60);
minuti = minuti%60;

console.log(`Ore: ${ore} Minuti: ${minuti}`);

// Esercizio 2.16
console.log(typeof(typeof(42)));
// prevedo che esca "string"

console.log("3" + 4 + 5);
// Concatenazione di stringhe = "345"

console.log("" == false);
// prevedo che esca true

console.log("" === false);
// prevedo che esca false

console.log(null == undefined);
// prevedo che esca false
// Risultato = true;

console.log(null === undefined);
// prevedo che esca false

// Esercizio 2.17
let l1 = 10, l2 = 10, l3 = 10;

console.log(Boolean((l1 + l2 > l3 || l1+ l3 > l2 || l2+l3 > l1)));

// Esercizio 2.18
let numero = 472;


console.log("Centinaia : ", Math.floor(numero / 100));
console.log("Decine : ", Math.floor(numero % 100 / 10));
console.log("Unità : " , numero % 10);

// Esercizio 2.19
let peso = 71;
let altezza = 1.74;
let BMI = peso / Math.pow(2, altezza);
console.log(BMI);

// Esercizio 2.20
const PROVA = 2;
// PROVA = 4;

// Errore: "Assignment to constant variable"

const ARRAY = [2,4,6,1,7,2,9];
ARRAY[4] = 10;

// Nessun Errore; Non viene modificato l'array, ma ciò a cui punta

// Esercizio 2.21
let km = 500;
let consumo = 15; 
let prezzoCarburante = 2.12;

let costo = (km/consumo)*prezzoCarburante;
console.log(costo);

// Esercizio 2.22
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
let kelvin = celsius + 273.15;

console.log(celsius, fahrenheit, kelvin);

// Esercizio 2.23
let char = "a";

console.log(char.toLowerCase() == "a" || char.toLowerCase() == "e" || char.toLowerCase() == "i" || char.toLowerCase() == "o" || char.toLowerCase() == "u" ? "Vocale" : "Consonante");

// Esercizio 2.24
let numInt = 1;
let numCifre = 1;

let check = 10;

while (Math.floor(numInt / check) != 0) {
    check *= 10;
    numCifre++;
}

console.log(numCifre);
