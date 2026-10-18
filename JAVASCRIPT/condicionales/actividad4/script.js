let nombre1 = prompt("Introduce el nombre de la primera fruta");
let precio1 = Number(prompt("Precio por kilo de " + nombre1));
let stock1 = 10;
let nombre2 = prompt("Introduce el nombre de la segunda fruta");
let precio2 = Number(prompt("Precio por kilo de " + nombre2));
let stock2 = 15;
let nombre3 = prompt("Introduce el nombre de la tercera fruta");
let precio3 = Number(prompt("Precio por kilo de " + nombre3));
let stock3 = 20;
alert("Frutas disponibles:\n" +
      nombre1 + " - " + stock1 + " kg a " + precio1 + " €/kg\n" +
      nombre2 + " - " + stock2 + " kg a " + precio2 + " €/kg\n" +
      nombre3 + " - " + stock3 + " kg a " + precio3 + " €/kg");
let fruta = prompt("¿Qué fruta quieres? " + nombre1 + ", " + nombre2 + " o " + nombre3);
let kilos = Number(prompt("¿Cuántos kilos?"));
if (fruta === nombre1) {
  if (kilos <= stock1) {
    alert("Total a cobrar: " + kilos * precio1 + " €");
  } else {
    alert("No hay suficiente " + nombre1 + ". Solo quedan " + stock1 + " kg");
  }
} else if (fruta === nombre2) {
  if (kilos <= stock2) {
    alert("Total a cobrar: " + kilos * precio2 + " €");
  } else {
    alert("No hay suficiente " + nombre2 + ". Solo quedan " + stock2 + " kg");
  }
} else if (fruta === nombre3) {
  if (kilos <= stock3) {
    alert("Total a cobrar: " + kilos * precio3 + " €");
  } else {
    alert("No hay suficiente " + nombre3 + ". Solo quedan " + stock3 + " kg");
  }
} else {
  alert("No tenemos esa fruta");
}