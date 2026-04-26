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
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).match(/[aeiou]/gi)) {
            count++;
        }
    }
    return count;
};

// Esercizio 4.8
const isPrimo = (num) => {
    let primo = true;
    for (let i = 2; i < num && primo; i++) {
        if (num % i == 0) {
            primo = false;
            continue;
        }
    }
    return primo;
};

// console.log(isPrimo(3));

// Esercizio 4.9

const potenza = (base, exp = 2) => {
    return Math.pow(base, exp);
};

// console.log(potenza(2, 5));

// Esercizio 4.10
const invertiStringa = (str = "") => {
    let strInvertita = "";
    for (let i = str.length - 1; i >= 0; i--) {
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
    for (let i = 0; i < N; i++) {
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

// Esercizio 4.14

const sommaFinoA = (N) => {
    if (N == 1) {
        return 1;
    } else {
        return (N + sommaFinoA(N - 1));
    }
};

console.log(sommaFinoA(4));

// Esercizio 4.15

const minMax = (...params) => {
    console.log(params);
    let minMax = {
        "min": undefined,
        "max": undefined
    };

    for (i in params) {
        if (i == 0) {
            minMax.min = params[i];
            minMax.max = params[i];
        } else {
            if (minMax.min > params[i]) {
                minMax.min = params[i];
            }
            if (minMax.max < params[i]) {
                minMax.max = params[i];
            }
        }

    }

    return minMax;

    // console.log(minMax.min);

};

console.log(minMax(8, 6, 2));

// Esercizio 4.16

const tronca = (num, dec = 1) => {
    //Converto il numero in una stringa
    let stringa = num.toString() || "";

    // Ricavo il numero di cifre decimali
    let numeroDecimali = stringa.split(".")[1].length;

    // Ritorno come float il numero coi decimali formattati
    return parseFloat(stringa.substring(0, stringa.length - numeroDecimali + dec));
};


console.log(
    tronca(16.17156513235, 5));


// Esercizio 4.17

const ripetiFino = (str, len) => {
    let stringaRipetuta = "";
    let i = 0;
    while (i < len) {
        stringaRipetuta += str.charAt(i++ % str.length);

    }

    return stringaRipetuta;
};

console.log(ripetiFino("abc", 7));

// Esercizio 4.18

const sommaDigiti = (num) => {

    let numStr = num.toString();

    // Caso termine, lunghezza stringa pari a 1
    if (numStr.length == 1) {
        return parseFloat(numStr);
    } else {
        let numSub = numStr.substring(0, 1);
        let numSli = numStr.slice(1);
        return parseFloat(numSub) + sommaDigiti(parseFloat(numSli));
    }
};

console.log(sommaDigiti(153));
