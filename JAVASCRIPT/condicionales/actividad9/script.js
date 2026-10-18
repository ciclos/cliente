let n1 = Number(prompt("Introduce el número 1"));
let n2 = Number(prompt("Introduce el número 2"));
let n3 = Number(prompt("Introduce el número 3"));
let n4 = Number(prompt("Introduce el número 4"));
let n5 = Number(prompt("Introduce el número 5"));

let mayorValor = n1;
let el_mayor = 1;
if (n2 > mayorValor) {
  mayorValor = n2;
  el_mayor = 2;
}
if (n3 > mayorValor) {
  mayorValor = n3;
  el_mayor = 3;
}
if (n4 > mayorValor) {
  mayorValor = n4;
  el_mayor = 4;
}
if (n5 > mayorValor) {
  mayorValor = n5;
  el_mayor = 5;
}

let p1 = "primero", p2 = "segundo", p3 = "tercero", p4 = "cuarto", p5 = "quinto";
let palabraMayor;
if (el_mayor === 1) palabraMayor = p1;
else if (el_mayor === 2) palabraMayor = p2;
else if (el_mayor === 3) palabraMayor = p3;
else if (el_mayor === 4) palabraMayor = p4;
else palabraMayor = p5;

let iguales = "";
if (n1 === n2) iguales += p2 + " y " + p1 + " son iguales\n";
if (n1 === n3) iguales += p3 + " y " + p1 + " son iguales\n";
if (n1 === n4) iguales += p4 + " y " + p1 + " son iguales\n";
if (n1 === n5) iguales += p5 + " y " + p1 + " son iguales\n";
if (n2 === n3) iguales += p3 + " y " + p2 + " son iguales\n";
if (n2 === n4) iguales += p4 + " y " + p2 + " son iguales\n";
if (n2 === n5) iguales += p5 + " y " + p2 + " son iguales\n";
if (n3 === n4) iguales += p4 + " y " + p3 + " son iguales\n";
if (n3 === n5) iguales += p5 + " y " + p3 + " son iguales\n";
if (n4 === n5) iguales += p5 + " y " + p4 + " son iguales\n";

if (iguales === "") iguales = "No hay números iguales";
alert("El mayor es el " + palabraMayor + " número: " + mayorValor + "\n" + iguales);