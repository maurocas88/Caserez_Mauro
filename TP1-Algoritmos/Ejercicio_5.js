
let dato, resultado;
// Crea las variables dato y resultado.

val1 = window.prompt("Introduce tu nombre", "...");
// Muestra un prompt solicitando el ingreso de un nombre,
// crea una variable val1 (por defecto var) y se almacena la respuesta.

val2 = window.prompt("Introduce tu apellido", "...");
// Muestra un prompt solicitando el ingreso de un apellido,
// crea una variable val2 (por defecto var) y se almacena la respuesta.

resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ;
// crea una variable resultado que almacena todo el texto concatenado.

document.write(resultado);

// Muestra en el DOM el texto acumulado en la variable resultado.
