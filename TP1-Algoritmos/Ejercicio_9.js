
// Ejercicio 9:
// Crear un programa que recibe 5 (cinco) notas de un alumno, las mismas deben ser ingresadas por el
// usuario y ser naturales < 11. Debe calcular el promedio e imprimir en pantalla si el 
// valor de media es < 5 “Reprobado”, entre 6 y 8 “Aprobado” y si es mayor a 8 “Sobresaliente”

let notas=[];
let nota;
let i=1;
suma=0;

alert("Introduzca las notas del estudiante: ");

while(i<6){
    nota=prompt(`Introduzca la nota ${i} del estudiante: `,"[0-10]");
        nota=parseInt(nota);

    if (typeof(nota)=="number"&&nota<11&&nota>=0){
        notas.push(nota);
        i++;
        suma=suma+nota;
    }
    else {
        alert("Debe introducir un numero entre 0 y 10")
    }
}
let prom =suma/5;
let condicion;
if (prom<=5){
    condicion="Reprobado";
}
if (prom>5&&prom<=8){
    condicion="Aprobado";
}
if (prom>8){
    condicion="Sobresaliente";
}
document.write(`Notas del alumno: ${notas}</br>El promedio del alumno es: ${prom}
</br>Condicion del alumno: ${condicion}`);



