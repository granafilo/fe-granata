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

// Esercizio 4.8
const isPrimo = (num) => {
    let primo = true;
    for(let i = 2; i < num && primo; i++){
        if(num % i == 0){
            primo = false;
            continue;
        }
    }
    return primo;
};

// console.log(isPrimo(3));

// Esercizio 4.9

const potenza = (base,exp = 2) => {
    return Math.pow(base, exp);
};

// console.log(potenza(2, 5));

// Esercizio 4.10
const invertiStringa = (str = "") => {
    let strInvertita = "";
    for(let i = str.length - 1; i >= 0; i--){
        strInvertita += str.charAt(i);
    }
    return strInvertita;
};

console.log(invertiStringa("Ciao"));

// Esercizio 4.11

const applicaDue = (num, fun1, fun2) => {
    return fun2(fun1(num));
};

// Esercizio 4.12

const ripeti = (fun1, N) => {
    for(let i = 0; i < N; i++){
        fun1();
    }
};

//Esercizio 4.13

// ???????????????????????????


// Ogni volta che chiamo creaContatore viene creato un creaContatore,
// quando eseguo quel contatore appena creato, lui farà riferimento alla stessa variabile privata e la aumenterà

const creaContatore = () => {
    let count = 0;
    return () => {
        conteggio++;
        return conteggio;
    };
};

