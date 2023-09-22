/**Write a program that prompts for a word or 
 * sentence (it can be capitalized, have spaces
 *  and punctuation). Figure out if the sentence/word 
 * is a palindrome or not. Ignoring punctuation, spaces 
 * and capitalized letters. */



let palabra = prompt("Escribe palabra")
palabra=palabra.toLowerCase();
palabra=palabra.toUpperCase();
palabra = palabra.replace(/[.,\/#!$%\^&\\\*;:{}=\-_`~()\s]/g, '');
palabraInversa = palabra.split("").reverse("").join("");
console.log(palabraInversa);

    if(palabra === palabraInversa){
        console.log("Es palindromo");
    }else{
        console.log("No es palindromo")
    }
