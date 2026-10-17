let precioDiesel = Number(prompt("Precio del diesel por litro"));
let precioGasolina = Number(prompt("Precio de la gasolina por litro"));
let precioDiesel10 = Number(prompt("Precio del diesel-10 por litro"));
let iva = Number(prompt("Porcentaje de IVA"));
let bonificacionAgricola = Number(prompt("Bonificación agrícola en céntimos por litro"));
let bonificacionTarjeta = Number(prompt("Bonificación de la tarjeta en céntimos por litro"));

let litros = Number(prompt("¿Cuántos litros compra?"));
let tipo = prompt("Tipo de combustible (diesel, gasolina o diesel-10)");
let esAgricola = prompt("¿Es agrícola? (si/no)");
let usaTarjeta = prompt("¿Usa la tarjeta de cliente? (si/no)");

let precio;
if (tipo === "diesel") {
  precio = precioDiesel;
} else if (tipo === "gasolina") {
  precio = precioGasolina;
} else {
  precio = precioDiesel10;
}

let descuento = 0;
if (esAgricola === "si") {
  descuento += bonificacionAgricola / 100;
}
if (usaTarjeta === "si") {
  descuento += bonificacionTarjeta / 100;
}

let precioLitro = precio - descuento;
let subtotal = litros * precioLitro;
let total = subtotal * (1 + iva / 100);
alert("Total a pagar: " + total.toFixed(2) + " €");