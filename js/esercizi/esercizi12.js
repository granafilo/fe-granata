// Esercizi
// Esercizio 12.1
// Scrivi una funzione aspetta che accetti un numero di millisecondi e restituisca una Promise che si risolve dopo quel tempo. Usala con await per stampare tre messaggi a intervalli di 1 secondo.

const attendi = (millis) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let messaggio = "Ciao!";
            resolve(messaggio);
        }, millis);
    })
}

const itera = async (numIterazione, func, millis) => {

    let count = 0;
    while (count < numIterazione) {
        console.log(await func(millis));
        count++;
    }
}


/*
itera(3, attendi, 1000);
*/

// Esercizio 12.2
// Scrivi una funzione che simuli il lancio di un dado usando setTimeout e una callback. La callback deve ricevere un numero casuale da 1 a 6 dopo 1 secondo.

const lancioDado = (callback) => {
    setTimeout(() => {
        let numero = Math.floor(Math.random() * 6) + 1
        // console.log(numero);

        callback(numero);
    }, 1000);
};

const mostraRisultato = (numero) => {
    console.log(numero);
};

// lancioDado(mostraRisultato);


// Esercizio 12.3
// Riscrivi l'esercizio precedente (il dado) usando una Promise al posto della callback.

const lancioDado2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let numero = Math.floor(Math.random() * 6) + 1;
            resolve(numero);
        }, 1000);
    })
};

const printResult = (lancioD) => {
    lancioD().then((numero) => {
        console.log(numero);
    }).catch((err) => {
        throw new Error("Errore nel lancio del dado");
    });
};

// printResult(lancioDado2);

// Esercizio 12.4
// Riscrivi l'esercizio del dado usando async/await.

const printResultAwait = async (lancioD) => {
    console.log(await lancioD());
};

// printResultAwait(lancioDado2);

// Esercizio 12.5
// Scrivi una funzione asincrona che simuli tre lanci di dado in sequenza (ciascuno dopo 1 secondo) e restituisca la somma dei tre lanci.

const lancioTriplo = async (func) => {
    let count = 0;
    while (count < 3) {
        console.log(await func());
        count++;
    }
};

// lancioTriplo(lancioDado2);

// Esercizio 12.6
// Scrivi una funzione asincrona che simuli tre lanci di dado in parallelo e restituisca un array con i tre risultati.

const lancioTriploParallelo = async (func) => {
    let result = [];

    const promesse = [func(), func(), func()];

    result = await Promise.all(promesse);

    return result;
};


const avvio = async (func) => {
    console.log("Result", await lancioTriploParallelo(func));
};

avvio(lancioDado2);

// Esercizio 12.7
// Scrivi una funzione che simuli un'operazione che fallisce casualmente (50% di possibilità). Usa una Promise che si risolve o si rifiuta in base al caso. Poi scrivi una funzione tentaFinoASuccesso che continui a riprovare finché non riesce, e stampi quanti tentativi sono serviti.

// Esercizio 12.8
// Usando fetch, scrivi una funzione asincrona che carichi un utente da https://jsonplaceholder.typicode.com/users/{id} e stampi il suo nome e la sua email. Gestisci il caso di errore (utente non trovato o errore di rete).

// Esercizio 12.9
// Usando fetch, scrivi una funzione che carichi tutti i post di un utente specifico da https://jsonplaceholder.typicode.com/posts?userId={id} e stampi il titolo di ogni post.

// Esercizio 12.10
// Scrivi una funzione asincrona che carichi in parallelo i dati di 3 utenti diversi (ID 1, 2, 3) da https://jsonplaceholder.typicode.com/users/{id} e restituisca un array con i loro nomi.

// Esercizio 12.11
// Scrivi una funzione fetchConTimeout che accetti un URL e un tempo massimo in millisecondi. Se la richiesta non si completa entro il tempo indicato, la Promise deve rifiutarsi con un errore di timeout.

// Esercizio 12.12
// Scrivi un sistema di "coda di esecuzione": una funzione che accetti un array di funzioni asincrone e le esegua una alla volta, in sequenza (la successiva parte solo quando la precedente è completata). Restituisca un array con tutti i risultati.

// Esercizio 12.13
// Scrivi una funzione asincrona che, dato un ID utente, carichi in sequenza:

// I dati dell'utente da /users/{id}
// I post dell'utente da /posts?userId={id}
// I commenti del primo post da /comments?postId={postId}
// Ogni step dipende dal risultato del precedente. Usa l'URL base https://jsonplaceholder.typicode.com.

// Esercizio 12.14
// Scrivi una funzione eseguiConRetry che accetti una funzione asincrona e un numero massimo di tentativi. Se la funzione fallisce, deve riprovare con un ritardo crescente (1s, 2s, 4s...) fino al massimo dei tentativi.

// Esercizio 12.15
// Scrivi un mini-sistema di "caching" per le richieste fetch. Crea una funzione cachedFetch che:

// Se l'URL è già stato richiesto, restituisca immediatamente il risultato dalla cache
// Se l'URL non è in cache, esegua il fetch, salvi il risultato e lo restituisca
// Esercizio 12.16
// Scrivi una funzione asincrona caricaInSequenza che accetti un array di URL e li carichi uno dopo l'altro. Per ciascuno stampa il tempo impiegato. Alla fine stampa il tempo totale.

// Esercizio 12.17
// Scrivi una funzione asincrona caricaInParallelo che faccia la stessa cosa dell'esercizio precedente ma in parallelo. Confronta il tempo totale con l'approccio sequenziale.

// Esercizio 12.18
// Scrivi una funzione creaPromise che accetti un valore e un ritardo, e restituisca una Promise che si risolve con quel valore dopo il ritardo. Poi crea 5 promise con ritardi diversi e usa Promise.race per ottenere la più veloce.

// Esercizio 12.19
// Scrivi una funzione asincrona che carichi tutti gli utenti da https://jsonplaceholder.typicode.com/users, poi per ciascun utente carichi i suoi post, e infine restituisca un array di oggetti { nome, numeroPosts } ordinato per numero di post decrescente.

// Esercizio 12.20
// Scrivi una funzione limitaConcorrenza che accetti un array di funzioni asincrone e un numero N di esecuzioni parallele massime. Deve eseguire al massimo N funzioni contemporaneamente.

// Esercizio 12.21
// Scrivi una funzione asincrona che implementi un "polling": data una funzione che restituisce una Promise, la chiami ripetutamente a intervalli regolari finché la condizione di stop è soddisfatta. Restituisce il risultato che ha soddisfatto la condizione.

// Esercizio 12.22
// Scrivi una funzione promiseAny che implementi il comportamento di Promise.any: dato un array di Promise, restituisce il risultato della prima che si risolve con successo. Se tutte falliscono, rifiuta con un array di errori. Non usare Promise.any.

// Esercizio 12.23
// Usando fetch, scrivi una funzione asincrona che cerchi un utente per nome (non per ID). Deve caricare tutti gli utenti e trovare quello il cui nome contiene la stringa cercata. Se non lo trova, lancia un errore.

// Esercizio 12.24
// Scrivi una funzione semaforo che simuli un semaforo: mostra "VERDE" per 3 secondi, poi "GIALLO" per 1 secondo, poi "ROSSO" per 3 secondi, e ripete il ciclo N volte. Usa async/await e la funzione aspetta dell'esercizio 12.1.

// Esercizio 12.25
// Scrivi una funzione asincrona che simuli il download di più file. Ogni "file" ha un nome e una dimensione (in secondi simulati). La funzione deve mostrare una barra di progresso testuale per ciascun file e alla fine stampare il riepilogo.

// Esercizio 12.26
// Scrivi un sistema di "eventi asincroni": una funzione creaEmitter che restituisca un oggetto con on(evento, callback) per registrare listener e emit(evento, dati) che esegua tutti i listener registrati in modo asincrono (con await) e restituisca i risultati.

// Esercizio 12.27
// Scrivi una funzione asincrona che, dato un array di ID, carichi i dati corrispondenti da https://jsonplaceholder.typicode.com/todos/{id} con un massimo di 3 richieste in parallelo. Usa Promise.allSettled per gestire eventuali errori senza bloccare il resto.

// Esercizio 12.28
// Scrivi una funzione cronometra che accetti una funzione asincrona e restituisca un oggetto { risultato, tempoMs } con il risultato della funzione e il tempo impiegato in millisecondi.

// Esercizio 12.29
// Scrivi una funzione che simuli un sistema di prenotazione: più utenti provano a prenotare lo stesso posto. Ogni prenotazione è una Promise con un ritardo casuale. Solo la prima che si risolve ottiene il posto, le altre ricevono un errore. Usa Promise.race.

// Esercizio 12.30
// Scrivi una funzione asincrona che implementi la paginazione: dato un URL base e un numero di pagine, carichi le pagine una alla volta (ogni pagina è url?_page=N&_limit=10), accumuli i risultati e restituisca l'array completo. Usa https://jsonplaceholder.typicode.com/posts come URL base.

