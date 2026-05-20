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

