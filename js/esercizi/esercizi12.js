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

lancioDado(mostraRisultato);


