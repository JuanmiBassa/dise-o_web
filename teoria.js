// POR QUÉ FUNCIONES PURAS:
//      La implementación es más legible
//      Más fácil de testear
//      Más seguro (Más dificil de introducir un error)

// Firts-class Functions
// ---------------------

function square(n) {
    return n ** 2;
}

const squares = [1, 2, 3].map(square);
console.log(JSON.stringify(squares));

// function expression
const sayHello = function name(item) {
    console.log("hola")
}
sayHello();

// Function declaration
// Hoisting, se "crea" una "tabla" con las declaraciones 
//      y despues se ejecuta el programa
function sayBye(text) {
    console.log(`Adios ${text}`);
}
sayBye("Yo");

// Arrow function
const numberX5 = (n) => {
    return n * 5;
}

let myArr = [10, 20, 30];
const squares2 = myArr.map((item) => item ** 2);


console.log(prueba);
var prueba; // = undefined, var es Hoisting
// let || const = error


const myArray = [1.2, 3, 5, 4.5];
const suma = (a, b) => a + b;

// MAP
const result = myArray.map((item, index) => {
    if (index == 2) {
        return item;
    } else {
        return 0;
    }
});
console.log(result);

// FILTER
const result2 = myArray.filter((item) => item > 2);
console.log(result2);

// REDUCE
const result3 = myArray.reduce((total, item) => {
    return total + item;
}, 0);
console.log(result3);

const resultArr = myArray.reduce((totalArr, item, index, array) => {
    if (item > 2) {
        totalArr.push(Math.round(item));
    }
    return totalArr;
}, []);
console.log(resultArr);

const resultEx1 = myArray.reduce((maxNum, item) => {
    return item > maxNum ? item : maxNum;
});
console.log(resultEx1);

// arrMaxMin es una array que comienza vacia [], al querer
// comparar lo inicializamos con valores (al final de todo)
// para poder comparar con los items
const resultEx3 = myArray.reduce((arrMaxMin, item) => {
    let min = Math.min(arrMaxMin[0], item);
    let max = Math.max(arrMaxMin[1], item);
    return [min, max];
}, [Infinity, -Infinity]);

console.log(resultEx3);

// Programa que cuenta las palabras y retorna el numero de duplicados utilizando reduce
const stringLorem = "Lorem lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, ab nisi aspernatur, voluptas sed perspiciatis in sit blanditiis nulla voluptate reprehenderit corporis quasi laborum laboriosam mollitia! Maiores officia voluptatem nihil!";
const words = stringLorem.replace(/[.,!?]*/g, "")
    .toLowerCase()
    .split(" ");

const result4 = words.reduce((freq, word) => {
    freq[word] > 0 ? freq[word] +=1 : freq[word] = 1;
    return freq;
}, {});
console.log(result4);