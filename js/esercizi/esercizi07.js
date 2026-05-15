// Esercizio 7.1
// Dato un array di numeri, usa map per creare un nuovo array dove ogni numero è triplicato.
console.log("Esercizio 7.1");

let numbers = []
for (let i = 0; i < 50; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}

const triple = numbers.map((num) => num * 3);
console.log(triple);


// Esercizio 7.2
// Dato un array di stringhe, usa map per creare un nuovo array dove ogni stringa ha la prima lettera maiuscola e il resto minuscolo.
console.log("Esercizio 7.2");

let strings = ["Ciao", "come", "Va", "salice"]
const stringUpper = strings.map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
console.log(stringUpper);


// Esercizio 7.3
// Dato un array di numeri, usa filter per ottenere solo i numeri maggiori di 10 e minori di 50.
console.log("Esercizio 7.3");

let range = numbers.filter((num) => num > 10 && num < 50)
console.log(range);

// Esercizio 7.4
// Dato un array di oggetti { nome, prezzo } che rappresentano prodotti, usa filter per trovare i prodotti con prezzo inferiore a 20 euro, poi usa map per ottenere un array con solo i nomi di quei prodotti.
console.log("Esercizio 7.4");


let product = [{ nome: "String", prezzo: 10 }, { nome: "String1", prezzo: 10 }, { nome: "String2", prezzo: 10 }, { nome: "String3", prezzo: 10 }, { nome: "String4", prezzo: 10 }, { nome: "String5", prezzo: 25 }]

let priceL = product.filter((pro) => pro.prezzo < 20);
let nameProd = priceL.map((pro) => pro.nome);

console.log(nameProd);



// Esercizio 7.5
// Dato un array di numeri, usa reduce per calcolare il prodotto di tutti gli elementi.
console.log("Esercizio 7.5");

let prodottoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((prev, curr) => prev * curr);
console.log(prodottoArray);


// Esercizio 7.6
// Dato un array di stringhe, usa reduce per trovare la stringa più lunga.
console.log("Esercizio 7.6");

let strMaxLen = strings.reduce((prev, curr) => prev.length >= curr.length ? prev : curr)
console.log(strMaxLen);

// Esercizio 7.7
// Dato un array di oggetti { studente, voto }, usa i metodi degli array per calcolare la media dei voti.
console.log("Esercizio 7.7");

let somma = 0;

let studenti = [{ nome: "Ale", voto: 2 }, { nome: "Tommy", voto: 3 }, { nome: "Fil", voto: 8 }]
somma = studenti.reduce((sum, obj) => sum + obj.voto, 0)
let mediaStudenti = somma / studenti.length;

console.log(somma, mediaStudenti);


// Esercizio 7.8
// Dato un array di numeri che può contenere duplicati, usa filter per creare un array senza duplicati (senza usare Set).
console.log("Esercizio 7.8");

let noDupl = [];
noDupl = numbers.filter((num, index, self) => {

    return self.indexOf(num) === index;
})
console.log(noDupl, noDupl.length);

// Esercizio 7.9
// Dato un array di oggetti { nome, eta }, usa i metodi degli array per trovare la persona più giovane.
console.log("Esercizio 7.9");

let persone = [{ nome: "Pier", eta: 10 }, { nome: "Paolo", eta: 15 }, { nome: "Gian", eta: 9 }, { nome: "Franco", eta: 22 }]

let minEta = persone.reduce((prev, curr) => curr.eta <= prev.eta ? curr : prev, persone[0])

console.log(minEta);


// Esercizio 7.10
// Dato un array di stringhe, usa reduce per creare un oggetto che conti le occorrenze di ogni stringa.

console.log("Esercizio 7.10");

let occorrenze = strings.reduce((acc, parola) => {
    acc[parola] = (acc[parola] || 0) + 1;
    return acc
}, {})

console.log(occorrenze);


// Esercizio 7.11
// Dato un array di array di numeri (es. [[1, 2], [3, 4], [5, 6]]), usa reduce per appiattirlo in un unico array e poi calcola la somma totale con un'altra chiamata a reduce.

console.log("Esercizio 7.11");

let numD = [[1, 2], [3, 4], [5, 6]];

let piatto = numD.reduce((flat, num) => flat.concat(num), [])
console.log(piatto);


let sommaTot = piatto.reduce((sum = 0, num) => sum + num, 0)

console.log(sommaTot);


// Esercizio 7.12
// Dato un array di transazioni (oggetti con tipo che può essere "entrata" o "uscita" e importo), calcola il saldo finale usando reduce.

console.log("Esercizio 7.12");

let transazioni = [{ tipo: "entrata", importo: 10 }, { tipo: "entrata", importo: 18 }, { tipo: "uscita", importo: 3 }]

let saldo = transazioni.reduce((sum = 0, tra) => {
    if (tra.tipo === "entrata") {
        sum += tra.importo;
    } else {
        sum -= tra.importo;
    }
    return sum
}, 0)

console.log("Saldo: ", saldo);


// Esercizio 7.13
// Dato un array di numeri, scrivi una singola catena di metodi che:

// Elimini i numeri negativi
// Rimuova i duplicati
// Ordini in ordine crescente
// Moltiplichi ogni numero per 10

console.log("Esercizio 7.13");

let numeri = [];
numeri = numbers
    .filter((num) => num > 0)
    .filter((num, index, self) => self.indexOf(num) === index)
    .sort((num1, num2) => num1 - num2)
    .map((num) => num * 10);

console.log(numeri);

// Esercizio 7.14
// Implementa la tua versione di map, filter e reduce come funzioni standalone (senza usare i metodi nativi). Ciascuna deve accettare un array e una callback.

console.log("Esercizio 7.14");


const persMap = (array, fun) => {
    let arrayOutput = [];
    for (let i = 0; i < array.length; i++) {
        arrayOutput.push(fun(array[i]))
    }
    return arrayOutput;
};

console.log("MAP: ", numbers.map((num) => num * 3));
console.log("PERSONAL MAP: ", persMap(numbers, (num) => num * 3));

const persFilter = (array, fun) => {
    let arrayOutput = [];
    for (let i = 0; i < array.length; i++) {
        if (fun(array[i])) {
            arrayOutput.push(array[i])
        }
    }
    return arrayOutput;
};

console.log("FILTER: ", numbers.filter((num) => num % 2 === 0));
console.log("PERSONAL FILTER: ", persFilter(numbers, (num) => num % 2 == 0));

const persReduce = (array, fun) => {
    let output = 0;
    for (let i = 0; i < array.length; i++) {
        output = fun(output, array[i]);
    }
    return output;
};

console.log("REDUCE: ", numbers.reduce((prev, curr) => prev + curr, 0));

console.log("PERSONAL REDUCE: ", persReduce(numbers, (prev, curr) => prev + curr));

// Esercizio 7.15
// Dato un array di oggetti che rappresentano ordini { cliente, prodotto, quantita, prezzoUnitario }, scrivi una pipeline che,:
let ordini = [{ cliente: "Fil", prodotto: "Loacker", quantita: 10, prezzoUnitario: 2.5 },
{ cliente: "Fil", prodotto: "Barrette", quantita: 10, prezzoUnitario: 8 },
{ cliente: "Tommy", prodotto: "Pane", quantita: 8, prezzoUnitario: 1 },
{ cliente: "Fil", prodotto: "Acqua", quantita: 25, prezzoUnitario: 5 },
{ cliente: "Ale", prodotto: "CocaCola", quantita: 2, prezzoUnitario: 15 }
]

console.log("Esercizio 7.15");

// Calcoli il totale di ogni ordine

let totaleOrdine = ordini.map((ord, i) => ({
    index: i,
    totale: (ord.quantita * ord.prezzoUnitario)
}));
console.log(totaleOrdine);


// Raggruppi gli ordini per cliente

let groupOrdini = ordini.reduce((acc, curr) => {
    if (!acc[curr.cliente]) {
        acc[curr.cliente] = [];
    }
    acc[curr.cliente].push(curr);
    return acc;
}, {})

console.log(groupOrdini);


// Calcoli il totale speso da ogni cliente

let totaleClienti = Object.entries(groupOrdini).map(([cliente, ordini]) => {
    let totCliente = ordini.reduce((prevOrd, currOrd) => {
        return (prevOrd + (currOrd.quantita * currOrd.prezzoUnitario));
    }, 0)
    
    return { cliente: cliente, totale: totCliente };
})

console.log("Spesa totale per clienti: ", totaleClienti);


// Esercizio 7.16
// Dato un array di numeri, usa map per generare un array di oggetti { valore, quadrato, cubo } per ciascun numero.
console.log("Esercizio 7.16");

let valori = numbers.slice(0, 10);

let oggettiValori = valori.map((num) => ({
    valore: num,
    quadrato: num * num,
    cubo: num * num * num
}));

console.log(oggettiValori);

// Esercizio 7.17
// Dato un array di stringhe che rappresentano indirizzi email, usa filter per ottenere solo quelli che terminano con ".it".
console.log("Esercizio 7.17");

let emaili = ["filippo@esempio.it", "test@example.com", "anna@dominio.it", "mario@site.org"];

let emailIt = emaili.filter((email) => email.endsWith(".it"));

console.log(emailIt);

// Esercizio 7.18
// Dato un array di oggetti { nome, voti } (dove voti è un array di numeri), usa map per creare un nuovo array dove ogni oggetto ha una proprietà aggiuntiva media.
console.log("Esercizio 7.18");

let studentiVoti = [
    { nome: "Anna", voti: [8, 7, 9] },
    { nome: "Luca", voti: [6, 7, 7] },
    { nome: "Marta", voti: [9, 10, 8] }
];

let studentiMedia = studentiVoti.map((studente) => ({
    ...studente,
    media: studente.voti.reduce((somma, voto) => somma + voto, 0) / studente.voti.length
}));

console.log(studentiMedia);

// Esercizio 7.19
// Dato un array di frasi (stringhe), usa flatMap per ottenere un array di tutte le singole parole, tutte in minuscolo.
console.log("Esercizio 7.19");

let frasi = ["Ciao mondo", "JavaScript è utile", "Gli array sono comodi"];

let paroleMinuscole = frasi.flatMap((frase) => frase.toLowerCase().split(" "));

console.log(paroleMinuscole);


// Esercizio 7.20
// Dato un array di numeri, usa reduce per creare un oggetto che separi i numeri in { pari: [...], dispari: [...] }.
console.log("Esercizio 7.20");

let pariDispari = numbers.slice(0, 20).reduce((acc, num) => {
    if (num % 2 === 0) {
        acc.pari.push(num);
    } else {
        acc.dispari.push(num);
    }
    return acc;
}, { pari: [], dispari: [] });

console.log(pariDispari);


// Esercizio 7.21
// Dato un array di oggetti { nome, eta }, usa sort e slice per ottenere i 3 più anziani.
console.log("Esercizio 7.21");

let topEta = persone.slice().sort((a, b) => b.eta - a.eta).slice(0, 3);

console.log(topEta);


// Esercizio 7.22
// Dato un array di stringhe, usa i metodi degli array per trovare la parola che appare più frequentemente.
console.log("Esercizio 7.22");

let parole = ["casa", "mare", "casa", "sole", "mare", "casa", "luna"];

let parolaPiuFreq = Object.entries(parole.reduce((acc, parola) => {
    acc[parola] = (acc[parola] || 0) + 1;
    return acc;
}, {})).sort((a, b) => b[1] - a[1])[0][0];

console.log(parolaPiuFreq);


// Esercizio 7.23
// Dato un array di oggetti { studente, materia, voto }, usa reduce per creare un oggetto dove ogni studente ha un array dei suoi voti raggruppati per materia.
console.log("Esercizio 7.23");

let votiMateria = [
    { studente: "Anna", materia: "matematica", voto: 8 },
    { studente: "Anna", materia: "italiano", voto: 7 },
    { studente: "Luca", materia: "matematica", voto: 6 },
    { studente: "Anna", materia: "matematica", voto: 9 },
    { studente: "Luca", materia: "italiano", voto: 8 }
];

let votiStudenti = votiMateria.reduce((acc, item) => {
    if (!acc[item.studente]) {
        acc[item.studente] = {};
    }
    if (!acc[item.studente][item.materia]) {
        acc[item.studente][item.materia] = [];
    }
    acc[item.studente][item.materia].push(item.voto);
    return acc;
}, {});

console.log(votiStudenti);


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