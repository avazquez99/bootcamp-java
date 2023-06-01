
console.log("Bienvenido ArgenFin. A continuación, se requerirá información para calcular el punto de equilibrio")

/* Solicitar datos */

var costoFijoTotal = parseFloat(prompt("Ingrese el costo fijo total: ")); 
// Utilizo parseFloat porque puede ser un valor decimal, aunque existe parseInt
var precioVentaUnitario = parseFloat(prompt("Ingrese el precio de venta unitario: "));
var costoVariableUnitario = parseFloat(prompt("Ingrese el costo variable unitario: "));

/* Punto de equilibrio */
var puntoEquilibrio = costoFijoTotal / (precioVentaUnitario - costoVariableUnitario);

console.log("El punto de equilibrio es: ", puntoEquilibrio);


//La notación se escribió utilizando camelCase