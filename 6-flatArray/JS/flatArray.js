/**Write a program that takes the following nested 
 * matrix and flattens it (makes it a 1D array). 
 * Use any type of algorithm you want like callbacks, 
 * recursion, etc... */
/**
 * Método concat : Permite unir un array y me devolvera otro
 * reduce: Ejecuta una función reductora sobre cada uno de los elementos de un array*/

let multiDimensión = [1, [2, 3, [4, 5, [6]]]];

function flatArray(multiDimensión) {
    return multiDimensión.reduce((acumulador, valActual) => acumulador.concat(Array.isArray(valActual) ? flatArray(valActual) : valActual), []);
};
 
let nuevoFlatArray = flatArray(multiDimensión);
console.log(nuevoFlatArray);
 
