let j1 = prompt("Jugador 1, elige piedra, papel o tijera");
let j2 = prompt("Jugador 2, elige piedra, papel o tijera");
if (j1 === j2) {
  alert("Empate");
} else if ((j1 === "piedra" && j2 === "tijera") ||
           (j1 === "papel" && j2 === "piedra") ||
           (j1 === "tijera" && j2 === "papel")) {
  alert("Ha ganado el jugador 1 con " + j1);
} else {
  alert("Ha ganado el jugador 2 con " + j2);
}