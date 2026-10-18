let n1 = Number(prompt("Introduce el primer número"));
let n2 = Number(prompt("Introduce el segundo número"));
if (n1 > n2) {
  alert("El mayor es: " + n1);
} else if (n2 > n1) {
  alert("El mayor es: " + n2);
} else {
  alert("Son iguales: " + n1);
}