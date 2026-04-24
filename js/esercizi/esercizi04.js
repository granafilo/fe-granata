// Esercizio 4.1

const BENVENUTO = (nome) => {
    return `Benvenuto, ${nome}`
}

console.log(BENVENUTO("FILIPPO"));


// Esercizio 4.2
const rettangolo = (base, altezza) => {
    return base * altezza;
}

// Esercizio 4.3

const celciusToFahenheit = (gradi) => {
    return gradi * 9 / 5 + 32;
}

// Esercizio 4.4

const massimo = (a, b, c) => {
    return Math.max(a, b, c);
}

console.log(massimo(1, 8, 12));

// Esercizio 4.5

const isPari = (a) => {
    return a % 2 == 0 ? true : false;
};

// Esercizio 4.6

const fattoriale = (a) => {
    let fattoriale = 1
    while (a > 0) {
        fattoriale = a * fattoriale;
        a--;
    }
    return fattoriale
};

console.log(fattoriale(6));

// Esercizio 4.7

const contaVocali = (str) => {
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i).match(/[aeiou]/gi)){
            count++;
        }
    }
    return count;
};
