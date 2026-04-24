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