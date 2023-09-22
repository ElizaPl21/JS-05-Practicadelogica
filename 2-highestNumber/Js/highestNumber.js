let listNumeros = [5, 4, 7, 3, 6, 8, 9, 0, 2, 1,];
let numElementos= 10;
for (let numA = 0; numA <= numElementos; numA++){
    for( let numB=0; numB<=numElementos;numB++)
    if (listNumeros[numB]>listNumeros[numB+1]){
        let aux = listNumeros [numB];
        listNumeros[numB]=listNumeros[numB+1];
        listNumeros[numB+1] = aux;
    } 
}
console.log("Numero mayor es: " + listNumeros[listNumeros.length-1]);

