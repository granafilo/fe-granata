// Esercizio 7.1
// Dato un array di numeri, usa map per creare un nuovo array dove ogni numero è triplicato.

let numbers = []
for (let i = 0; i < 50; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}

const triple = numbers.map((num) => num * 3);
console.log(triple);


// Esercizio 7.2
// Dato un array di stringhe, usa map per creare un nuovo array dove ogni stringa ha la prima lettera maiuscola e il resto minuscolo.

let strings = ["Ciao", "come", "Va", "salice"]
const stringUpper = strings.map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
console.log(stringUpper);


// Esercizio 7.3
// Dato un array di numeri, usa filter per ottenere solo i numeri maggiori di 10 e minori di 50.

let range = numbers.filter((num) => num > 10 && num < 50)
console.log(range);

// Esercizio 7.4
// Dato un array di oggetti { nome, prezzo } che rappresentano prodotti, usa filter per trovare i prodotti con prezzo inferiore a 20 euro, poi usa map per ottenere un array con solo i nomi di quei prodotti.

let product = [{ nome: "String", prezzo: 10 }, { nome: "String1", prezzo: 10 }, { nome: "String2", prezzo: 10 }, { nome: "String3", prezzo: 10 }, { nome: "String4", prezzo: 10 }, { nome: "String5", prezzo: 25 }]

let priceL = product.filter((pro) => pro.prezzo < 20);
let nameProd = priceL.map((pro) => pro.nome);

console.log(nameProd);



// Esercizio 7.5
// Dato un array di numeri, usa reduce per calcolare il prodotto di tutti gli elementi.

let prodottoArray = [1,2,3,4,5,6,7,8,9,10].reduce((prev, curr) => prev * curr);
console.log(prodottoArray);


// Esercizio 7.6
// Dato un array di stringhe, usa reduce per trovare la stringa più lunga.

let strMaxLen = strings.reduce((prev, curr) => prev.length >= curr.length ? prev : curr)
console.log(strMaxLen);

// Esercizio 7.7
// Dato un array di oggetti { studente, voto }, usa i metodi degli array per calcolare la media dei voti.
let somma = 0;

let studenti = [{nome : "Ale", voto : 2}, {nome : "Tommy", voto : 3}, {nome : "Fil", voto : 8}]
somma = studenti.reduce((sum, obj) => sum + obj.voto, 0)
let mediaStudenti =  somma / studenti.length;

console.log(somma, mediaStudenti);


// Esercizio 7.8
// Dato un array di numeri che può contenere duplicati, usa filter per creare un array senza duplicati (senza usare Set).

// Esercizio 7.9
// Dato un array di oggetti { nome, eta }, usa i metodi degli array per trovare la persona più giovane.

// Esercizio 7.10
// Dato un array di stringhe, usa reduce per creare un oggetto che conti le occorrenze di ogni stringa.

// Esercizio 7.11
// Dato un array di array di numeri (es. [[1, 2], [3, 4], [5, 6]]), usa reduce per appiattirlo in un unico array e poi calcola la somma totale con un'altra chiamata a reduce.

// Esercizio 7.12
// Dato un array di transazioni (oggetti con tipo che può essere "entrata" o "uscita" e importo), calcola il saldo finale usando reduce.

// Esercizio 7.13
// Dato un array di numeri, scrivi una singola catena di metodi che:

// Elimini i numeri negativi
// Rimuova i duplicati
// Ordini in ordine crescente
// Moltiplichi ogni numero per 10
// Esercizio 7.14
// Implementa la tua versione di map, filter e reduce come funzioni standalone (senza usare i metodi nativi). Ciascuna deve accettare un array e una callback.

// Esercizio 7.15
// Dato un array di oggetti che rappresentano ordini { cliente, prodotto, quantita, prezzoUnitario }, scrivi una pipeline che:

// Calcoli il totale di ogni ordine
// Raggruppi gli ordini per cliente
// Calcoli il totale speso da ogni cliente
// Esercizio 7.16
// Dato un array di numeri, usa map per generare un array di oggetti { valore, quadrato, cubo } per ciascun numero.

// Esercizio 7.17
// Dato un array di stringhe che rappresentano indirizzi email, usa filter per ottenere solo quelli che terminano con ".it".

// Esercizio 7.18
// Dato un array di oggetti { nome, voti } (dove voti è un array di numeri), usa map per creare un nuovo array dove ogni oggetto ha una proprietà aggiuntiva media.

// Esercizio 7.19
// Dato un array di frasi (stringhe), usa flatMap per ottenere un array di tutte le singole parole, tutte in minuscolo.

// Esercizio 7.20
// Dato un array di numeri, usa reduce per creare un oggetto che separi i numeri in { pari: [...], dispari: [...] }.

// Esercizio 7.21
// Dato un array di oggetti { nome, eta }, usa sort e slice per ottenere i 3 più anziani.

// Esercizio 7.22
// Dato un array di stringhe, usa i metodi degli array per trovare la parola che appare più frequentemente.

// Esercizio 7.23
// Dato un array di oggetti { studente, materia, voto }, usa reduce per creare un oggetto dove ogni studente ha un array dei suoi voti raggruppati per materia.

// Esercizio 7.24
// Scrivi una funzione che accetti un array e una funzione di raggruppamento, e restituisca un oggetto con gli elementi raggruppati (implementa una versione generica di groupBy).

// Esercizio 7.25
// Dato un array di date (come stringhe "YYYY-MM-DD"), usa filter per ottenere solo le date di un mese specifico, poi ordinale dalla più recente alla più vecchia.

// Esercizio 7.26
// Dato un array di oggetti { prodotto, prezzo, sconto }, scrivi una pipeline che:

// Calcoli il prezzo scontato
// Filtri i prodotti con prezzo scontato > 10
// Ordini per prezzo scontato crescente
// Restituisca un array di stringhe "prodotto: €prezzo"
// Esercizio 7.27
// Dato un array di numeri, usa reduce per calcolare la varianza. La varianza è la media dei quadrati delle differenze dalla media.

// Esercizio 7.28
// Dato un array di parole, usa i metodi degli array per creare un indice: un oggetto dove ogni lettera dell'alfabeto è una chiave e il valore è un array di parole che iniziano con quella lettera.

// Esercizio 7.29
// Scrivi una funzione zip che accetti due array e restituisca un array di coppie. Ad esempio, zip([1, 2, 3], ["a", "b", "c"]) restituisce [[1, "a"], [2, "b"], [3, "c"]]. Se gli array hanno lunghezza diversa, fermati al più corto.

// Esercizio 7.30
// Dato un array di oggetti che rappresentano log di accesso { utente, data, azione }, scrivi una pipeline che:

// Raggruppi per utente
// Per ogni utente conti il numero totale di azioni
// Ordini gli utenti per numero di azioni (dal più attivo al meno attivo)
// Restituisca un array di oggetti { utente, totaleAzioni }