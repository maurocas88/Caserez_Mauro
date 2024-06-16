
// Ejercicio 7:
// A partir del siguiente array que se proporciona:
// var valores = [true, false, 2, "hola", "mundo", 3, "char"];
// 1. Determinar cuál de los “elementos de texto” es mayor, es decir el que contenga más letras.
// 2. Imprimir estos elementos de menor a mayor cantidad de letras.
// 3. Determinar el resultado de las cuatro operaciones matemáticas básicas (suma, resta, multiplicación y
// división) realizadas con los dos elementos numéricos
document.write("</br> Ejercicio 7 </br> ");

var valores = [true, false, 2, "hola", "mundo", 3, "char"];
let masL=0;
let strings=[];
let aux;
let a=0;
let b=0;


////////////////////  ITEM 1  /////////////////////////
document.write("</br> Punto 1: </br> ");

valores.forEach(element => {
    if (typeof(element)=="string") {
        strings.push(element);
        if (element.length>masL.length||masL==0) {
            masL=element;
        }
    }
    if (typeof(element)=="number") {
        if (a==0) {
            a=element;
        } else {
            b=element;
        }
    }
});

if (masL!=0) {
    document.write("El string mas largo es: ",masL);
} else {
    document.write("El Arreglo no contiene strings");
}

////////////////////  ITEM 2  /////////////////////////
document.write("</br></br> Punto 2: </br> ");

document.write("Sin ordenar: [",strings,"]");
aux=strings[0];

for (let i = 1; i < strings.length; i++) {
    if (strings[i].length<aux.length) {
        strings[i-1] =strings[i]   
        strings[i]=aux;
        i=0;
        aux=strings[i]

        }
    else{
        aux=strings[i]

        }
    }


document.write("</br></br>Ordenados: [",strings,"]");


////////////////////  ITEM 3  /////////////////////////
document.write("</br></br> Punto 3: ");

document.write(`</br></br> ${a} + ${b}= ${a+b}`);
document.write(`</br></br> ${a} - ${b}= ${a-b}`);
document.write(`</br></br> ${a} x ${b}= ${a*b}`);
document.write(`</br></br> ${a} / ${b}= ${a/b}`);

