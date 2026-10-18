let nombre1 = prompt("Nombre del jugador 1");
let monedas1 = Number(prompt("Monedas escondidas de " + nombre1));
let nombre2 = prompt("Nombre del jugador 2");
let monedas2 = Number(prompt("Monedas escondidas de " + nombre2));
let nombre3 = prompt("Nombre del jugador 3");
let monedas3 = Number(prompt("Monedas escondidas de " + nombre3));
let nombre4 = prompt("Nombre del jugador 4");
let monedas4 = Number(prompt("Monedas escondidas de " + nombre4));
let nombre5 = prompt("Nombre del jugador 5");
let monedas5 = Number(prompt("Monedas escondidas de " + nombre5));
let total = monedas1 + monedas2 + monedas3 + monedas4 + monedas5;

let apuesta1 = Number(prompt(nombre1 + ", adivina cuántas monedas hay en total"));
let apuesta2;
do {
  apuesta2 = Number(prompt(nombre2 + ", adivina cuántas monedas hay en total"));
} while (apuesta2 === apuesta1);
let apuesta3;
do {
  apuesta3 = Number(prompt(nombre3 + ", adivina cuántas monedas hay en total"));
} while (apuesta3 === apuesta1 || apuesta3 === apuesta2);
let apuesta4;
do {
  apuesta4 = Number(prompt(nombre4 + ", adivina cuántas monedas hay en total"));
} while (apuesta4 === apuesta1 || apuesta4 === apuesta2 || apuesta4 === apuesta3);
let apuesta5;
do {
  apuesta5 = Number(prompt(nombre5 + ", adivina cuántas monedas hay en total"));
} while (apuesta5 === apuesta1 || apuesta5 === apuesta2 ||
         apuesta5 === apuesta3 || apuesta5 === apuesta4);

let ganadores = "";
if (apuesta1 === total) ganadores += nombre1 + "\n";
if (apuesta2 === total) ganadores += nombre2 + "\n";
if (apuesta3 === total) ganadores += nombre3 + "\n";
if (apuesta4 === total) ganadores += nombre4 + "\n";
if (apuesta5 === total) ganadores += nombre5 + "\n";

if (ganadores === "") {
  alert("Hay " + total + " monedas. No ha ganado nadie");
} else {
  alert("Hay " + total + " monedas.\nHa(n) ganado:\n" + ganadores);
}