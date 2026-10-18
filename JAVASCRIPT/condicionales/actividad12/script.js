let examen1 = Number(prompt("Nota de la 1ª evaluación (0-100)"));
let recuperacion1 = Number(prompt("Nota de la recuperación de la 1ª evaluación (0 si no se hizo)"));
let examen2 = Number(prompt("Nota de la 2ª evaluación (0-100)"));
let recuperacion2 = Number(prompt("Nota de la recuperación de la 2ª evaluación (0 si no se hizo)"));
let examen3 = Number(prompt("Nota de la 3ª evaluación (0-100)"));
let recuperacion3 = Number(prompt("Nota de la recuperación de la 3ª evaluación (0 si no se hizo)"));

let aprobada1 = examen1 >= 70 || recuperacion1 >= 50;
let aprobada2 = examen2 >= 60 || recuperacion2 >= 50;
let aprobada3 = examen3 >= 50 || recuperacion3 >= 50;

if (aprobada1 && aprobada2 && aprobada3) {
  alert("El alumno está APROBADO");
} else {
  if (!aprobada1) alert("Ha suspendido la 1ª evaluación");
  if (!aprobada2) alert("Ha suspendido la 2ª evaluación");
  if (!aprobada3) alert("Ha suspendido la 3ª evaluación");
  alert("El alumno está SUSPENSO");
}