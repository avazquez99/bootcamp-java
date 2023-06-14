//Función 1: Flujo de caja

console.log("Ingrese la información requerida para conocer su flujo de caja");

var ingr = parseInt(prompt("Detalle los ingresos: "));
var egr = parseInt(prompt("Detalle los egresos: "));

flujoCaja(ingr, egr);

function flujoCaja(ingresos, egresos) {

    var balancePeriodo = ingresos - egresos;


    if (balancePeriodo < 0) {
        console.log("-1");
    } else if (balancePeriodo > 0) {
        console.log("1");
    } else if (balancePeriodo === 0) {
        console.log("0");
    } else {
        console.log("La información ingresada contiene errores, revise sus datos.");
    }
}

// Función 2: Intereses

var ofertaCreditos = [
    { plan: 'Plan 001', capital: 150000, plazo: 30, tasa: 0.15},
    { plan: 'Plan 002', capital: 300000, plazo: 180, tasa: 0.1},
    { plan: 'Plan 003', capital: 485000, plazo: 60, tasa: 0.23},
];

calculoInversion(ofertaCreditos);

function calculoInversion(arrayInv) {

    for (var i = 0; i < arrayInv.length; i++) {

        var planCred = arrayInv[i].plan;
        var capitalCred = arrayInv[i].capital;
        var plazoCred = arrayInv[i].plazo;
        var tasaCred = arrayInv[i].tasa;

        var intereses = calculoInteres(capitalCred, plazoCred, tasaCred);
    
        arrayInv[i].intereses = intereses;

      }
      
      return arrayInv;
    

}

function calculoInteres (capital, plazo, tasa) {
    var interesCred = (capital*plazo*tasa)/100;
    return interesCred;
}