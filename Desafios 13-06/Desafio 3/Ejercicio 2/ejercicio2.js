var ofertaCreditos = [
    { plan: 'Plan 001', capital: 150000, plazo: 30, tasa: 0.15},
    { plan: 'Plan 002', capital: 300000, plazo: 180, tasa: 0.1},
    { plan: 'Plan 003', capital: 485000, plazo: 60, tasa: 0.23},
];

var planElegido = 'PLAN A UTILIZAR PARA EL ANÁLISIS';

for (var i = 0; i < ofertaCreditos.length; i++) {

    var planCred = ofertaCreditos[i].plan;
    var capitalCred = ofertaCreditos[i].capital;
    var plazoCred = ofertaCreditos[i].plazo;
    var tasaCred = ofertaCreditos[i].tasa;

    if (planElegido == planCred) {

        var interesCred = (capitalCred*plazoCred*tasaCred)/100;
        ofertaCreditos[i].interes = interesCred;

    }

}

console.log(ofertaCreditos)