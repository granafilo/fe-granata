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

const confronto = (obj1, obj2) => {
    let uguali = true;

    if (Object.keys(obj1).length != Object.keys(obj2)) {
        return "Oggetti diversi";
    } else {
        for (let i = 0; i < Object.keys(obj1).length; i++) {
            let chiave = Object.keys(obj1)[i];
            if (!obj2[chiave] || obj1[chiave] != obj2[chiave]) {
                return "Oggetti diversi";
            }
        }
    }

    return "Oggetti uguali";
};

let libro2 = { ...libro };
libro2.titolo = "Ciao";

console.log(confronto(libro, libro2));



// Esercizio 6.11
// Crea un oggetto contoBancario con le proprietà titolare e saldo, e i metodi deposita, preleva e mostraSaldo. Il metodo preleva non deve permettere di andare in negativo.

let contoBancario = {
    titolare: "Filippo Granta",
    saldo: 100,
    deposita: function (importo) {
        this.saldo += importo;
    },
    preleva: function (importo) {
        if ((this.saldo - importo) < 0) {
            console.log("Importo troppo elevato, riprovare");
        } else {
            this.saldo -= importo
        }
    },
    mostraSaldo: function () {
        console.log("Saldo:", this.saldo);
    }
};

contoBancario.deposita(100);
contoBancario.mostraSaldo();
contoBancario.preleva(250);
contoBancario.mostraSaldo();
contoBancario.preleva(200);
contoBancario.mostraSaldo();


// Esercizio 6.12
// Dato un oggetto annidato che rappresenta una struttura ad albero (un'azienda con dipartimenti e dipendenti), scrivi una funzione che conti il numero totale di dipendenti.

let azienda = {
    nome: "TechCorp",
    sviluppo: {
        dipendenti: ["Alice", "Bob"],
        frontend: {
            dipendenti: ["Carlo", "Diana"]
        }
    },
    marketing: {
        dipendenti: ["Elena"]
    }
};

const countDep = (azienda) => {
    let count = 0;
    for (chiave in azienda) {
        if (chiave === "dipendenti" && Array.isArray(azienda[chiave])) {
            count += azienda[chiave].length;
        } else if (typeof azienda[chiave] == "object" && azienda[chiave] != null) {
            count += countDep(azienda[chiave]);
        }
    }

    return count;
};

console.log(countDep(azienda));



// Esercizio 6.13
// Scrivi una funzione che accetti un array di oggetti e una chiave, e restituisca un nuovo array ordinato per il valore di quella chiave. Ad esempio, ordinare [{nome: "Zara", eta: 20}, {nome: "Anna", eta: 25}] per "nome".
let arrObj = [{ nome: "Zara", eta: 20 }, { nome: "Anna", eta: 25 }];
const orderArrayByKey = (arr, key) => {
    if (typeof arr[0][key] === 'string') {
        console.log("Chiave stringa");
        arrObj.sort((a, b) => a[key].localeCompare(b[key]))
    } else if (typeof arr[0][key] === 'number') {
        arrObj.sort((a, b) => a[key] - b[key])
    }
};

orderArrayByKey(arrObj, 'eta');
console.log(arrObj);
console.log(typeof arrObj[0]['eta']);



// Esercizio 6.14
// Scrivi una funzione che accetti un oggetto e restituisca una copia profonda (deep clone) dell'oggetto, gestendo oggetti e array annidati. Non usare JSON.parse(JSON.stringify()).

const objToCp = (obj) => {

};

// Esercizio 6.15
// Scrivi una funzione pick che accetti un oggetto e un array di chiavi, e restituisca un nuovo oggetto con solo quelle proprietà.

const pick = (obj, arrKey) => {
    let newObj = {};
    for (let chiave of arrKey) {

        if (chiave in obj) {
            newObj[chiave] = obj[chiave];
        }
    }

    return newObj;
};

console.log(pick({ nome: "Fil", eta: 10 }, ["nome", "eta"]));


// Esercizio 6.16
// Scrivi una funzione omit che accetti un oggetto e un array di chiavi, e restituisca un nuovo oggetto senza quelle proprietà.
let newObj = {};
const omit = (obj, arrKey) => {
    let newObj = structuredClone(obj);

    for (let chiave of arrKey) {
        if (chiave in obj) {
            delete newObj[chiave];
        }
    }

    return newObj;
};

console.log(omit({ nome: "Fil", eta: 10 }, ["eta"]));


// Esercizio 6.17
// Crea un oggetto rubrica con un array interno di contatti (ciascuno con nome, telefono, email). Aggiungi i metodi: aggiungiContatto, rimuoviContatto, cercaPerNome, cercaPerTelefono e mostraTutti.

let rubrica = {
    contatti: [
        {
            nome: "F",
            cognome: "G",
            telefono: "3394290454",
            email: "fg@gmail.com"
        },
        {
            nome: "A",
            cognome: "C",
            telefono: "123456789",
            email: "ac@libero.it"
        },
        {
            nome: "T",
            cognome: "V",
            telefono: "987654321",
            email: "tv@alice.it"
        }
    ],
    aggiungiContatto: function (contatto) {
        this.contatti.unshift(contatto);
    },
    rimuoviContatto: function (contatto) {
        for (let i in this.contatti) {
            if (this.contatti[i] == contatto) {
                console.log("contatto uguale", i);
                this.contatti.splice(i, 1);
                console.log(this.contatti);

            }
        }
    },
    cercaPerNome: function (nome, cognome) {
        for (let i in this.contatti) {
            if (this.contatti[i].nome == nome && this.contatti[i].cognome == cognome) {
                console.log("Contatto trovato");
                console.log(this.contatti[i]);
                return this.contatti[i];
            }
        }
        console.log("Contatto non trovato");
    },
    cercaPerTelefono: function (tel) {
        for (let i in this.contatti) {
            if (this.contatti[i].telefono == tel) {
                console.log("Contatto trovato");
                console.log(this.contatti[i]);
                return this.contatti[i];
            }
        }
        console.log("Contatto non trovato");
    },
    mostraTutti: function () {
        console.log("\nRubrica: ", this.contatti);
    }

};

let contatto = {
    nome: "M",
    cognome: "F",
    telefono: "456123789",
    email: "mf@max.com"
}

// console.log(rubrica.contatti);
rubrica.aggiungiContatto(contatto);
// console.log(rubrica.contatti);
// rubrica.rimuoviContatto(contatto);
// console.log(rubrica.contatti);
// rubrica.cercaPerNome("F", "G");
// let contattoTrovato = rubrica.cercaPerNome("F", "G");
rubrica.cercaPerTelefono("3394290454")

// rubrica.mostraTutti();

// Esercizio 6.18
// Scrivi una funzione che accetti un oggetto con proprietà annidate e un "percorso" come stringa (es. "indirizzo.citta") e restituisca il valore corrispondente, oppure undefined se il percorso non esiste.

const utente = {
    id: 1,
    username: "tech_lover",
    profilo: {
        nome: "Luca",
        cognome: "Rossi",
        contatti: {
            email: "luca.rossi@esempio.it",
            social: {
                twitter: "@lucarossi_dev",
                linkedin: "linkedin.com/in/lucarossi"
            }
        }
    },
    preferenze: {
        notifiche: true,
        temi: ["dark", "high-contrast"]
    },
    indirizzo: {
        citta: "Milano",
        cap: 20100
        // Nota: la proprietà 'via' qui manca appositamente per testare l'undefined
    }
};

let percorso = "indirizzo.citta";
let percorsoUnd = "indirizzo.via";

const trovaPercorso = (percorso, obj) => {
    let arrPercorso = percorso.split('.');
    console.log(arrPercorso);

    //prev iniziale pari a utente, corr pari a arrPercorso[0] inizialmente, itera ad ogni ciclo
    let risultato = arrPercorso.reduce((prev, corr) => {
        //se prev esiste e prev[corr] non è undefined ovvero esiste il percorso prev.corr allora restituisco prev.corr
        return (prev && prev[corr] !== undefined) ? prev[corr] : undefined;
    }, utente);

    return risultato;
};

console.log(trovaPercorso(percorsoUnd, utente));
// Esercizio 6.19
// Dato un array di oggetti che rappresentano transazioni { data, tipo, importo, categoria }, scrivi una funzione che restituisca un oggetto riepilogo con: totale entrate, totale uscite, saldo, e importo per categoria.
const transazioni = [
    { data: "2024-03-01", tipo: "entrata", importo: 1500, categoria: "stipendio" },
    { data: "2024-03-02", tipo: "uscita", importo: 50, categoria: "spesa" },
    { data: "2024-03-05", tipo: "uscita", importo: 100, categoria: "svago" },
    { data: "2024-03-10", tipo: "entrata", importo: 200, categoria: "rimborso" },
    { data: "2024-03-15", tipo: "uscita", importo: 450, categoria: "affitto" },
    { data: "2024-03-17", tipo: "uscita", importo: 30, categoria: "spesa" },
    { data: "2024-03-20", tipo: "uscita", importo: 80, categoria: "svago" }
];

let riepe = {
    entrate: 0,
    uscite: 0,
    saldo: 0,
    categoria: [
        { Cibo: 100 }
    ]
}

const riepilogo = (transazioni) => {
    let entrate, uscite, saldo, importoCategoria;
    let riepilogo = transazioni.reduce((riep, t) => {
        //verifico che l'oggetto dedicato alla categoria esista
        if (!riep.rCat[t.categoria]) {
            riep.rCat[t.categoria] = 0;
        }

        if (t.tipo == "entrata") {
            riep.entrate += t.importo;
            riep.saldo += t.importo;
            riep.rCat[t.categoria] += t.importo;
        } else if (t.tipo == "uscita") {
            riep.uscite += t.importo;
            riep.saldo -= t.importo;
            riep.rCat[t.categoria] -= t.importo;
        }

        return riep

    }, {
        saldo: 0,
        entrate: 0,
        uscite: 0,
        rCat: {}
    })

    return riepilogo;
};

console.log(riepilogo(transazioni));


// Esercizio 6.20
// Scrivi una funzione che "appiattisca" un oggetto annidato. Ad esempio:

// Input: { a: 1, b: { c: 2, d: { e: 3 } } }
// Output: { "a": 1, "b.c": 2, "b.d.e": 3 }

const appiattisciObj = (obj, prefix = '') => {
    let appiattito = {};
    for (let chiave in obj) {
        let nuovaChiave = prefix ? `${prefix}.${chiave}` : chiave;
        if (typeof obj[chiave] === 'object' && obj[chiave] !== null && !Array.isArray(obj[chiave])) {
            Object.assign(appiattito, appiattisciObj(obj[chiave], nuovaChiave));
        } else {
            appiattito[nuovaChiave] = obj[chiave];
        }
    }
    return appiattito;
};

console.log(appiattisciObj({ a: 1, b: { c: 2, d: { e: 3 } } }));


// Esercizio 6.21
// Scrivi una funzione che accetti due oggetti e restituisca un oggetto che descrive le differenze: proprietà aggiunte, rimosse e modificate.

const differenzeObj = (obj1, obj2) => {
    let differenze = {
        aggiunte: {},
        rimosse: {},
        modificate: {}
    };

    for (let chiave in obj1) {
        if (!(chiave in obj2)) {
            differenze.rimosse[chiave] = obj1[chiave];
        } else if (obj1[chiave] !== obj2[chiave]) {
            differenze.modificate[chiave] = { prima: obj1[chiave], dopo: obj2[chiave] };
        }
    }

    for (let chiave in obj2) {
        if (!(chiave in obj1)) {
            differenze.aggiunte[chiave] = obj2[chiave];
        }
    }

    return differenze;
};

console.log(differenzeObj({ a: 1, b: 2 }, { a: 1, b: 3, c: 4 }));

// Esercizio 6.22
// Crea un oggetto inventario che gestisca prodotti. Ogni prodotto ha nome, prezzo, quantita e categoria. Aggiungi i metodi: aggiungiProdotto, rimuoviProdotto, aggiornaProdotto, cercaPerCategoria, prodottiSottoscorta(soglia) e valoreInventario.

let inventario = {
    prodotti: [],
    aggiungiProdotto: function (prodotto) {
        this.prodotti.push(prodotto);
    },
    rimuoviProdotto: function (nome) {
        this.prodotti = this.prodotti.filter(p => p.nome !== nome);
    },
    aggiornaProdotto: function (nome, aggiornamenti) {
        let prodotto = this.prodotti.find(p => p.nome === nome);
        if (prodotto) {
            Object.assign(prodotto, aggiornamenti);
        }
    },
    cercaPerCategoria: function (categoria) {
        return this.prodotti.filter(p => p.categoria === categoria);
    },
    prodottiSottoscorta: function (soglia) {
        return this.prodotti.filter(p => p.quantita < soglia);
    },
    valoreInventario: function () {
        return this.prodotti.reduce((totale, p) => totale + (p.prezzo * p.quantita), 0);
    }
};

inventario.aggiungiProdotto({ nome: "Laptop", prezzo: 800, quantita: 5, categoria: "Elettronica" });
inventario.aggiungiProdotto({ nome: "Mouse", prezzo: 20, quantita: 2, categoria: "Accessori" });
inventario.aggiungiProdotto({ nome: "Tastiera", prezzo: 50, quantita: 3, categoria: "Accessori" });
console.log(inventario.cercaPerCategoria("Accessori"));
console.log(inventario.prodottiSottoscorta(4));
console.log(inventario.valoreInventario());

// Esercizio 6.23
// Scrivi una funzione che accetti un array di oggetti e una funzione di confronto, e restituisca un oggetto con min e max secondo quel criterio.


const minimoMassimo = (arr, compareFn) => {
    return {
        minimo: arr.reduce((min, curr) => compareFn(curr, min) < 0 ? curr : min),
        massimo: arr.reduce((max, curr) => compareFn(curr, max) > 0 ? curr : max)
    };
};

const persone = [{ nome: "Anna", eta: 25 }, { nome: "Carlo", eta: 30 }, { nome: "Bea", eta: 20 }];
console.log(minimoMassimo(persone, (a, b) => a.eta - b.eta));

// Esercizio 6.24
// Scrivi una funzione che trasformi un array di coppie chiave-valore in un oggetto e viceversa. Ad esempio, [["a", 1], ["b", 2]] diventa { a: 1, b: 2 }.

const pairsToObj = (pairs) => {
    return pairs.reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
    }, {});
};

const objToPairs = (obj) => {
    return Object.entries(obj);
};

console.log(pairsToObj([["a", 1], ["b", 2]]));
console.log(objToPairs({ a: 1, b: 2 }));