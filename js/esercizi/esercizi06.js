// Esercizio 6.1
// Crea un oggetto libro con le proprietà: titolo, autore, annoPubblicazione, pagine. Stampa ogni proprietà.

let libro = {
    titolo: "Il terzo gemello",
    autore: "Ken Follet",
    annoPubblicazione: 2017,
    pagine: 358
}

console.log("Libro: ");
console.log(Object.entries(libro));


// Esercizio 6.2
// Crea un oggetto rettangolo con le proprietà base e altezza, e i metodi area e perimetro che restituiscano i rispettivi valori.

let rettangolo = { base: 2, altezza: 1, area: function () { return (this.base * this.altezza) }, perimetro: function () { return this.base * 2 + this.altezza * 2 } }

console.log(rettangolo.area(), rettangolo.perimetro());


// Esercizio 6.3
// Scrivi una funzione che accetti un oggetto e restituisca il numero delle sue proprietà.

const countProp = (object) => {
    return Object.keys(object).length;
};

console.log("Numero Proprietà: ", countProp(libro));


// Esercizio 6.4
// Scrivi una funzione che accetti un oggetto persona (con nome, cognome, eta) e restituisca una stringa di presentazione formattata.

let persona = {
    nome: "filippo",
    cognome: "granata",
    eta: 21
}

const presentazione = (persona) => {
    return `Ciao sono ${persona.nome} ${persona.cognome}, e ho ${persona.eta} anni.`
};

console.log(presentazione(persona));

// Esercizio 6.5
// Scrivi una funzione che accetti due oggetti e restituisca un nuovo oggetto che sia la fusione dei due (le proprietà del secondo sovrascrivono quelle del primo in caso di conflitto).

const clone = (obj, clone) => {

    for (let prop of Object.keys(obj)) {
        clone[prop] = obj[prop];
    }
    return
};

const fusioneObj = (obj1, obj2) => {

    let fuso = {};

    clone(obj1, fuso);
    clone(obj2, fuso);

    return fuso;
};

console.log(fusioneObj(libro, rettangolo));


// Esercizio 6.6
// Dato un array di oggetti che rappresentano studenti (ciascuno con nome e voto), scrivi una funzione che restituisca il nome dello studente con il voto più alto.

let studenti = [{ nome: "Filippo", voto: 10 }, { nome: "Alessandro", voto: 9 }];

const nomeVoto = (studenti) => {
    let studenteVotoMax = studenti[0];
    for (let i = 1; i < studenti.length; i++) {
        if (studenti[i].voto > studenteVotoMax.voto) {
            studenteVotoMax = studenti[i];
        }
    }

    return studenteVotoMax;
};

console.log(nomeVoto(studenti));


// Esercizio 6.7
// Dato un array di oggetti { nome, prezzo, quantita } che rappresentano prodotti in un carrello, scrivi una funzione che calcoli il totale dell'ordine.

let cart = [{ nome: "Pepe", prezzo: 1, quantita: 1 }, { nome: "Sale", prezzo: 2.5, quantita: 5 }]

const costoSpesa = (cart) => {
    let spesa = 0;

    for (let i = 0; i < cart.length; i++) {
        spesa += cart[i].prezzo * cart[i].quantita;
    }

    return spesa;
};

console.log(costoSpesa(cart));


// Esercizio 6.8
// Scrivi una funzione che accetti un oggetto e restituisca un nuovo oggetto con chiavi e valori invertiti. Ad esempio, { a: 1, b: 2 } diventa { 1: "a", 2: "b" }.

const invertiObj = (obj) => {
    let invertito = {}
    for (let prop of Object.keys(obj)) {
        invertito[obj[prop]] = prop;
    }

    return invertito;
};

console.log(invertiObj(rettangolo));


// Esercizio 6.9
// Scrivi una funzione che, dato un array di oggetti con proprietà categoria e valore, raggruppi gli oggetti per categoria in un nuovo oggetto. Ad esempio:

// Input:

let spesa = [
    { categoria: "frutta", valore: "mela" },
    { categoria: "verdura", valore: "carota" },
    { categoria: "frutta", valore: "pera" }
]
// Output:

// {
//   frutta: ["mela", "pera"],
//   verdura: ["carota"]
// }

const raggruppaSpesa = (spesa) => {
    let gruppo = {};


    for (let i = 0; i < spesa.length; i++) {
        if (!gruppo[spesa[i].categoria]) {
            gruppo[spesa[i].categoria] = []
        }
        gruppo[spesa[i].categoria].push(spesa[i].valore);
    }
    return gruppo;
};
console.log(raggruppaSpesa(spesa));


// Esercizio 6.10
// Scrivi una funzione che confronti due oggetti e restituisca true se hanno le stesse proprietà con gli stessi valori (confronto superficiale).

// Esercizio 6.11
// Crea un oggetto contoBancario con le proprietà titolare e saldo, e i metodi deposita, preleva e mostraSaldo. Il metodo preleva non deve permettere di andare in negativo.

// Esercizio 6.12
// Dato un oggetto annidato che rappresenta una struttura ad albero (un'azienda con dipartimenti e dipendenti), scrivi una funzione che conti il numero totale di dipendenti.

// Esercizio 6.13
// Scrivi una funzione che accetti un array di oggetti e una chiave, e restituisca un nuovo array ordinato per il valore di quella chiave. Ad esempio, ordinare [{nome: "Zara", eta: 20}, {nome: "Anna", eta: 25}] per "nome".

// Esercizio 6.14
// Scrivi una funzione che accetti un oggetto e restituisca una copia profonda (deep clone) dell'oggetto, gestendo oggetti e array annidati. Non usare JSON.parse(JSON.stringify()).

// Esercizio 6.15
// Scrivi una funzione pick che accetti un oggetto e un array di chiavi, e restituisca un nuovo oggetto con solo quelle proprietà.

// Esercizio 6.16
// Scrivi una funzione omit che accetti un oggetto e un array di chiavi, e restituisca un nuovo oggetto senza quelle proprietà.

// Esercizio 6.17
// Crea un oggetto rubrica con un array interno di contatti (ciascuno con nome, telefono, email). Aggiungi i metodi: aggiungiContatto, rimuoviContatto, cercaPerNome, cercaPerTelefono e mostraTutti.

// Esercizio 6.18
// Scrivi una funzione che accetti un oggetto con proprietà annidate e un "percorso" come stringa (es. "indirizzo.citta") e restituisca il valore corrispondente, oppure undefined se il percorso non esiste.

// Esercizio 6.19
// Dato un array di oggetti che rappresentano transazioni { data, tipo, importo, categoria }, scrivi una funzione che restituisca un oggetto riepilogo con: totale entrate, totale uscite, saldo, e importo per categoria.

// Esercizio 6.20
// Scrivi una funzione che "appiattisca" un oggetto annidato. Ad esempio:

// // Input: { a: 1, b: { c: 2, d: { e: 3 } } }
// // Output: { "a": 1, "b.c": 2, "b.d.e": 3 }
// Esercizio 6.21
// Scrivi una funzione che accetti due oggetti e restituisca un oggetto che descrive le differenze: proprietà aggiunte, rimosse e modificate.

// Esercizio 6.22
// Crea un oggetto inventario che gestisca prodotti. Ogni prodotto ha nome, prezzo, quantita e categoria. Aggiungi i metodi: aggiungiProdotto, rimuoviProdotto, aggiornaProdotto, cercaPerCategoria, prodottiSottoscorta(soglia) e valoreInventario.

// Esercizio 6.23
// Scrivi una funzione che accetti un array di oggetti e una funzione di confronto, e restituisca un oggetto con min e max secondo quel criterio.

// Esercizio 6.24
// Scrivi una funzione che trasformi un array di coppie chiave-valore in un oggetto e viceversa. Ad esempio, [["a", 1], ["b", 2]] diventa { a: 1, b: 2 }.