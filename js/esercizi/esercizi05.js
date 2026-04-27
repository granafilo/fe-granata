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

const arrayNum = [1,2,3,4,5,6,7,8,9,10];

const sommaArray = (arrayNum) => {
    let somma = 0;
    for(num of arrayNum){
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
    for(num of arrayNum){
        if(num > max){
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

    for (num of arrayNum){
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
        if(num === ele){
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
        if(!noDupl.includes(element)){
            noDupl.push(element);
        }
    }
    return noDupl;
};

const duplicates = [1,1,3,6,2,8,1];
console.log(noDouplicates(duplicates));

console.log("");

// Esercizio 5.8
console.log("Esercizio 5.8");

const intersezione = (array1, array2) => {
    const comuni = [];
    for(const ele1 of array1){
        if(array2.includes(ele1)){
            comuni.push(ele1);
        }
    }

    return comuni;
};

console.log(intersezione(arrayNum, duplicates));
console.log("");

// Esercizio 5.9
console.log("Esercizio 5.9");
console.log("");

// Esercizio 5.10
console.log("Esercizio 5.10");
console.log("");

// Esercizio 5.11
console.log("Esercizio 5.11");
console.log("");

// Esercizio 5.12
console.log("Esercizio 5.12");
console.log("");

// Esercizio 5.13
console.log("Esercizio 5.13");
console.log("");

// Esercizio 5.14
console.log("Esercizio 5.14");
console.log("");

// Esercizio 5.15
console.log("Esercizio 5.15");
console.log("");

// Esercizio 5.16
console.log("Esercizio 5.16");
console.log("");

// Esercizio 5.17
console.log("Esercizio 5.17");
console.log("");

// Esercizio 5.18
console.log("Esercizio 5.18");
console.log("");

// Esercizio 5.19
console.log("Esercizio 5.19");
console.log("");

// Esercizio 5.20
console.log("Esercizio 5.20");
console.log("");

// Esercizio 5.21
console.log("Esercizio 5.21");
console.log("");

// Esercizio 5.22
console.log("Esercizio 5.22");
console.log("");

// Esercizio 5.23
console.log("Esercizio 5.23");
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
