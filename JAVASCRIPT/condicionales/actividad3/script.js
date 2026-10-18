let precioSimple = Number(prompt("Precio por noche de habitación simple"));
let precioDoble = Number(prompt("Precio por noche de habitación doble"));
let precioSuite = Number(prompt("Precio por noche de habitación suite"));
let noches = Number(prompt("Número de noches"));
let tipo = prompt("Tipo de habitación (simple, doble o suite)");
let total;
if (tipo === "simple") {
  total = noches * precioSimple;
} else if (tipo === "doble") {
  total = noches * precioDoble;
} else if (tipo === "suite") {
  total = noches * precioSuite;
} else {
  total = "tipo no válido";
}
alert("Total a pagar: " + total);