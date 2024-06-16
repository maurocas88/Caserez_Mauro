
// Ejercicio 8:
// Escribir un script que muestre la posición de la primera vocal de un texto introducido por teclado. Por
// ejemplo: perro = “e” es la letra Nº2; árbol = “a” es la letra Nº1

let palabra=prompt("Introduzca una palabra para conocer su primer vocal: ", "Palabra...");

let vocales= ["a","e","i","o","u","A","E","I","O","U"];
let num;
let primer=-1;
let letra

for (const vocal of vocales) {
    num=palabra.indexOf(vocal)  

    if (num>=0) {
        if (num<primer||primer==-1) {
            primer=num;
            letra=vocal;
        }
    }
}
if (primer>=0) {
    document.write(`<br> ${palabra} : ${letra} es la letra N° `,primer+1)

}
else{
    document.write("El texto no contiene vocales")

}

