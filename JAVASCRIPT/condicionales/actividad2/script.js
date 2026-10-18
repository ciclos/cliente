let n1 = Number(prompt("Introduce el número 1"));
let n2 = Number(prompt("Introduce el número 2"));
let n3 = Number(prompt("Introduce el número 3"));
let n4 = Number(prompt("Introduce el número 4"));
let n5 = Number(prompt("Introduce el número 5"));
let mayor = n1;
let posicion = 1;
if (n2 > mayor) {
  mayor = n2;
  posicion = 2;
}
if (n3 > mayor) {
  mayor = n3;
  posicion = 3;
}
if (n4 > mayor) {
  mayor = n4;
  posicion = 4;
}
if (n5 > mayor) {
  mayor = n5;
  posicion = 5;
}
alert("El mayor es el " + posicion + "º número: " + mayor);