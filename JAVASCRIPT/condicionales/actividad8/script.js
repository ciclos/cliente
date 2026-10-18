let numero = Number(prompt("Introduce el número a adivinar"));
let acertado = false;
let dichos = " ";
for (let intento = 1; intento <= 5 && !acertado; intento++) {
  let num = Number(prompt("Intento " + intento + " de 5. Adivina el número"));
  if (dichos.indexOf(" " + num + " ") !== -1) {
    alert("¡Ese número ya lo dijiste!");
  } else if (num === numero) {
    alert("¡Has acertado en el intento " + intento + "!");
    acertado = true;
  } else {
    dichos += num + " ";
  }
}
if (!acertado) {
  alert("Agotaste los 5 intentos. El número era " + numero);
}