
let meses=[
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"]

    let mes = prompt("Ingrese un numero y le dire de que mes se trata")
    mes--;
    if (mes>=0 && mes<12) {
        document.write(`Mes de: ${meses[mes]}`);
        
    }
    else{
        document.write(`Actualice la página e ingrese un mes entre 1 y 12`);

    }