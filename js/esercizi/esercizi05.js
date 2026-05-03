// const arra = [{nome : "Filippo"}, {nome : "Prova"}, {nome : "Aura"},{nome : "Bobby"}]

// console.log(arra[0].nome.localeCompare(arra[1].nome);

// console.log(arra.sort((a,b) => a.nome.localeCompare(b.nome)));


// Esercizio 5.1
console.log("Esercizio 5.1");

const amici = ["Filippo", "Samuel", "Eric", "Arya", "Alessandro"]
console.log(amici[0], amici.at(-1), amici.length);

console.log("");

// Esercizio 5.2
console.log("Esercizio 5.2");

let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sommaArray = (arrayNum) => {
    let somma = 0;
    for (num of arrayNum) {
        somma += num;
    }
    return somma;
};

console.log(sommaArray(arrayNum));
console.log("");

// Esercizio 5.3
console.log("Esercizio 5.3");

const maxArray = (arrayNum) => {
    let max = 0;
    for (num of arrayNum) {
        if (num > max) {
            max = num;
        }
    }
    return max;
};

console.log(maxArray(arrayNum))

console.log("");
// Esercizio 5.4
console.log("Esercizio 5.4");

const soloPari = (arrayNum) => {
    let pari = [];

    for (num of arrayNum) {
        if (num % 2 == 0) {
            pari.push(num);
        }
    }

    return pari;
};

console.log(soloPari(arrayNum));
console.log("");

// Esercizio 5.5
console.log("Esercizio 5.5");

const countNum = (array, ele) => {
    let count = 0;

    array.forEach((num) => {
        if (num === ele) {
            count++;
        }
    })

    return count;
};

console.log(countNum(arrayNum, 6));
console.log("");

// Esercizio 5.6
console.log("Esercizio 5.6");

const mediaArray = (array) => {
    let somma = 0;

    array.forEach((num) => {
        somma += num;
    })

    return somma / array.length;
};

console.log(mediaArray(arrayNum));
console.log("");

// Esercizio 5.7
console.log("Esercizio 5.7");



const noDouplicates = (array) => {
    let noDupl = [];

    for (const element of array) {
        if (!noDupl.includes(element)) {
            noDupl.push(element);
        }
    }
    return noDupl;
};

const duplicates = [1, 1, 3, 6, 2, 8, 1];
console.log(noDouplicates(duplicates));

console.log("");

// Esercizio 5.8
console.log("Esercizio 5.8");

const intersezione = (array1, array2) => {
    const comuni = [];
    for (const ele1 of array1) {
        if (array2.includes(ele1)) {
            comuni.push(ele1);
        }
    }

    return comuni;
};

console.log(intersezione(arrayNum, duplicates));
console.log("");

// Esercizio 5.9
console.log("Esercizio 5.9");

const ordineLen = (array) => {
    return array.sort((a, b) => a.length - b.length);
};

console.log(ordineLen(amici));
console.log("");

// Esercizio 5.10
console.log("Esercizio 5.10");

const ruotaArray = (array, n) => {

    for (let i = 1; i <= n; i++) {
        array.unshift(array[array.length - 1]);
        array.pop(array.length - 1);
    }

    return array;
};

console.log(ruotaArray(arrayNum, 2));


console.log("");

// Esercizio 5.11
console.log("Esercizio 5.11");

const arrayProperties = (array) => {

    let output = {
        "min": array[0],
        "max": array[0],
        "media": 0,
        "somma": 0
    }

    for (let i = 0; i < array.length; i++) {
        output.somma += array[i];
        output.min = array[i] < output.min ? array[i] : output.min;
        output.max = array[i] > output.max ? array[i] : output.max;
    }

    output.media = output.somma / array.length;

    return output;
};

console.log(arrayProperties(arrayNum));


console.log("");

// Esercizio 5.12
console.log("Esercizio 5.12");

// arrayNum = [[1,2], 4, 6,2, 6, [7,8]]

const appiatArray = (array) => {

    let arrayAppiattito = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i][0]) {
            for (let j = 0; j < array[i].length; j++) {
                arrayAppiattito.push(array[i][j]);
            }
        } else {
            arrayAppiattito.push(array[i]);
        }
    }

    return arrayAppiattito;
};

console.log(appiatArray(arrayNum));


console.log("");

// Esercizio 5.13
console.log("Esercizio 5.13");

let arrayPalindromoNum = [1, 2, 2, 1]

const arrayPalindromo = (array) => {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {

        if (array[i] != array[array.length - i - 1]) {
            return "Array non palindromo";
        }
    }
    return "Array Palindromo";
};

console.log(arrayPalindromo(arrayPalindromoNum));


console.log("");

// Esercizio 5.14
console.log("Esercizio 5.14");

const sommaCumulativa = (array) => {
    let arrayCumulativo = [];
    for (let i = 1; i <= array.length; i++) {
        arrayCumulativo.push(sommaArray(array.slice(0, i)));
    }

    return arrayCumulativo;
};

console.log(sommaCumulativa([1, 2, 3, 4, 5]));

console.log("");

// Esercizio 5.15
console.log("Esercizio 5.15");

const shuffleArray = (array) => {
    let randomArray = [];
    let i = 0;
    let n = array.length;
    while (i < n) {
        let randomId = Math.floor(Math.random(array.length) * array.length);
        console.log(randomId);
        randomArray.push(array[randomId]);
        array.splice(randomId, 1);
        i++;
    }
    return randomArray;
};

// console.log(shuffleArray(arrayNum));

console.log("");

// Esercizio 5.16
console.log("Esercizio 5.16");

const secMax = (array) => {
    array.sort((a, b) => b - a);
    console.log(array);

    return array[1];
};

console.log(secMax(arrayNum));


console.log("");

// Esercizio 5.17
console.log("Esercizio 5.17");

const sottoArray = (array, n) => {
    let arrayCompleto = [];
    for (let i = 0; i < array.length; i += n) {
        let sArray = [];
        let j = 0;
        while (j < n && j + i < array.length) {
            console.log(i);

            console.log(j, array[i + j]);
            sArray.push(array[i + j]);
            j++;
        }
        arrayCompleto.push(sArray)
    }

    return arrayCompleto;
};

console.log(sottoArray([1, 2, 3, 4, 5], 2));


console.log("");

// Esercizio 5.18
console.log("Esercizio 5.18");

const mergeArray = (array1, array2) => {
    let merge = array1.concat(array2);
    return merge.sort((a, b) => a - b);
};

console.log("");

// Esercizio 5.19
console.log("Esercizio 5.19");

const arrayDupl = (array) => {
    let arrayDouble = [];
    for (let i = 0; i < array.length; i++) {

        if (array.indexOf(array[i]) != array.lastIndexOf(array[i]) && !arrayDouble.includes(array[i])) {
            arrayDouble.push(array[i])
        }

    }
    return arrayDouble;
};

console.log(arrayDupl([1, 1, 4, 7, 2, 7, 12, 8, 25, 91, 2, 7]));


console.log("");

// Esercizio 5.20
console.log("Esercizio 5.20");

const range = (array) => {
    array.sort((a, b) => a - b);
    return array[array.length - 1] - array[0];
};

console.log(range(arrayNum));

console.log("");

// Esercizio 5.21
console.log("Esercizio 5.21");

const sommaMinima = (array) => {
    array.sort((a, b) => a - b);
    return array[0] + array[1];
};

console.log(sommaMinima(arrayNum));


console.log("");

// Esercizio 5.22
console.log("Esercizio 5.22");

arrayNum.push(5)
arrayNum.push(5)
arrayNum.push(3)
arrayNum.push(5)
arrayNum.push(3)
arrayNum.push(2)

const mostFreqEle = (array, n) => {
    let countEl = [];
    let flag = true;
    for (let i = 0; i < array.length; i++) {
        flag = true;
        for (let j = 0; j < countEl.length; j++) {
            // console.log(countEl.length, array[i], countEl[j][0]);

            if (array[i] == countEl[j][0]) {
                countEl[j][1]++;
                flag = false;
            }
        }

        if (flag) {
            countEl.push([array[i], 1]);
        }

    }

    countEl.sort((a, b) => b[1] - a[1]);

    return countEl.slice(0, n);
};

console.log(mostFreqEle(arrayNum, 2));


console.log([[2, 0], [2, 2]].includes([2, true]));


console.log("");

// Esercizio 5.23
console.log("Esercizio 5.23");

const strNoDupl = (arrayStr) => {
    let newStrArr = [];
    let uguale = true;

    for (let i = 0; i < arrayStr.length; i++) {
        let j = i + 1;
        uguale = true;
        
        console.log("inizio While", "i = ", i);
        
        while (uguale && (j <= arrayStr.length )) {
            
            if (arrayStr[i] != arrayStr[j]) {
                uguale = false;
                console.log(arrayStr[i], arrayStr[j]);
                console.log("Diversa");
                newStrArr.push(arrayStr[i]);
                i = j-1;
                console.log("Array nuovo:", newStrArr);
                
            } else {
                console.log(arrayStr[i], arrayStr[j]);
                console.log("Uguale, controllo la prossima stringa", j );
                j++;
            }

        }
    }

    return newStrArr;
};

console.log(strNoDupl(["a", "a", "b", "b", "a"]));


console.log("");

// Esercizio 5.24
console.log("Esercizio 5.24");
console.log("");

// Esercizio 5.25
console.log("Esercizio 5.25");
console.log("");

// Esercizio 5.26
console.log("Esercizio 5.26");
console.log("");

// Esercizio 5.27
console.log("Esercizio 5.27");
console.log("");

// Esercizio 5.28
console.log("Esercizio 5.28");
console.log("");
