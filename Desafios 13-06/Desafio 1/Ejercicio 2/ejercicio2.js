
console.log("Bienvenido al programa ejecutivo de finanzas personales de ArgenFin. Necesitaremos su ingreso para poder presupuestar sus gastos");

var ingresoTotal = parseFloat(prompt("Ingrese su monto en pesos: "));

var gastosNecesarios = 0.5 * ingresoTotal;
var gastosOpcionales = 0.3 * ingresoTotal;
var ahorroInversion = 0.2 * ingresoTotal;

console.log("De su ingreso, $" + gastosNecesarios + " se deberán destinar a gastos necesarios.");
console.log("De su ingreso, $" + gastosOpcionales + " se deberán destinar a gastos opcionales.");
console.log("De su ingreso, $" + ahorroInversion + " se deberán destinar a ahorros e inversiones.");