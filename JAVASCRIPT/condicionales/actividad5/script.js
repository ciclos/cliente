let monedas1 = Number(prompt("Monedas que esconde el jugador 1"));
let monedas2 = Number(prompt("Monedas que esconde el jugador 2"));
let total = monedas1 + monedas2;
let apuesta1 = Number(prompt("Jugador 1, ¿cuántas monedas crees que hay en total?"));
let apuesta2 = Number(prompt("Jugador 2, ¿cuántas monedas crees que hay en total?"));
if (apuesta1 === total && apuesta2 === total) {
  alert("Hay " + total + " monedas. Han ganado los dos");
} else if (apuesta1 === total) {
  alert("Hay " + total + " monedas. Ha ganado el jugador 1");
} else if (apuesta2 === total) {
  alert("Hay " + total + " monedas. Ha ganado el jugador 2");
} else {
  alert("Hay " + total + " monedas. No ha ganado nadie");
}