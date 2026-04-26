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

//Esercizio 4.19

const convertiTemperatura = (valore = 0, uniP = "C", uniA = "F") => {
    switch (uniA) {
        case "C":
            if (uniP == "C") {
                return valore;
            } else if (uniP == "F") {
                return (valore - 32) * 9 / 5;
            } else {
                return valore - 273.15;
            }
            break;
        case "F":
            if (uniP == "C") {
                return (valore * 9 / 5) + 32;
            } else if (uniP == "F") {
                return valore;
            } else {
                return (valore - 273.15) * 9 / 5 + 32;
            }
            break;
        case "k":
            if (uniP == "C") {
                return valore + 273.15;
            } else if (uniP == "F") {
                return (valore - 32) * 5 / 9 + 273.15;
            } else {
                return valore;
            }
            break;
    }
};

console.log(convertiTemperatura(0, "C", "F"));

// Esercizio 4.20

const convalidaEmail = (str) => {
    // Con regex
    // return str.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) ? true : false;


    //Senza regex

    let atTrovato = {
        "bool": false,
        "index": 0
    };

    for (i in str) {
        if (str.charAt(i) === "@" && i != str.length && i != 0) {
            atTrovato.bool = true;
            atTrovato.index = i;
        }
        if (atTrovato.bool && str.charAt(i) === "." && atTrovato.index != i - 1) {
            return true;
        }
    }

    return false;

};

console.log(convalidaEmail("a@1."));


// Esercizio 4.21

const mcd = (num1, num2) => {
    if (num2 === 0) {
        return num1;
    } else {
        return mcd(num2, (num1 % num2));
    }
};

const mcm = (num1, num2) => {
    return (num1 * num2) / (mcd(num1, num2));
};

console.log(mcm(7, 5));


// Esercizio 4.22
const creaPassword = (numChar) => {
    let password = "";
    const caratteri = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', ';', ':', ',', '.', '<', '>', '?', '/'
    ];

    for (let i = 0; i < numChar; i++) {
        let index = (Math.floor(Math.random() * caratteri.length));

        password += caratteri[index];
    }

    return password;
};

console.log(creaPassword(8));

// Esercizio 4.23

const isPangram = (str) => {
    let char = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    for (c in char) {
        for (c1 in str) {
            if (str[c1].toUpperCase() == char[c]) {
                break;
            } else if (c1 == str.length - 1) {
                return false;
            }
        }
    }

    return true;
};

console.log(isPangram("abcdefghilmknopqrstuvwxyzj"));

// Esercizio 4.24

const fibonacci = (N) => {
    if (N == 1) {
        return 1;
    } else {
        return N + fibonacci(N - 1);
    }
};

console.log(fibonacci(4));

// Esercizio 4.25

// ??????????????????????????????????

const compose = (f, g) => {
    return (x) => {
        return f(g(x));
    };
};

// Esercizio 4.26

// ?????????????????????????????????????????

const somma = (a,b) => a+b; 

const curry = (f) => {
    return (a) => {
        return (b) => {
            return f(a, b);
        }
    }
};

console.log(curry(somma)(3)(4));
