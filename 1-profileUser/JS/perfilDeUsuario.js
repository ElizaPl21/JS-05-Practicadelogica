/*Write a program that prompts a user for their data: username,
age, and a list of their favorite movies. Store the information 
and then showcase it in the console. Take note that the output for 
the films should add a small message like: 'The film {film} is one of my favorites'.*/

var nombreUsuario = "Elizabeth";
var edadUsuario = 24;
var peliculasFav = ["John wick 4","La milla verde", "Despues de ti", "El viaje de Chihiro", "Your name", "Interstellar","Up", "Good Will Hunting","Soul" ]
console.log("Nombre del usuario: " + nombreUsuario);
console.log("Edad del usuario: " + edadUsuario);
for (let pelicula of peliculasFav){
    console.log("Una de mis peliculas favorita es " + pelicula);
}