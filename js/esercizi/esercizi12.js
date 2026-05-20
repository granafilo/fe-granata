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

