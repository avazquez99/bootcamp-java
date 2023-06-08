
/* Base de datos */

var datosAnuales = [
    { periodo: 'Enero', ingresos: 1500, egresos: 1500 },
    { periodo: 'Febrero', ingresos: 2500, egresos: 2500 },
    { periodo: 'Marzo', ingresos: 84683, egresos: 1155 },
    { periodo: 'Abril', ingresos: 135353, egresos: 1533 },
    { periodo: 'Mayo', ingresos: 1535, egresos: 5434 },
    { periodo: 'Junio', ingresos: 4343354, egresos: 5434543 },
    { periodo: 'Julio', ingresos: 435453, egresos: 4543 },
    { periodo: 'Agosto', ingresos: 78351, egresos: 7816 },
    { periodo: 'Septiembre', ingresos: 1878, egresos: 95634 },
    { periodo: 'Octubre', ingresos: 48483, egresos: 9433 },
    { periodo: 'Noviembre', ingresos: 35483, egresos: 53133 },
    { periodo: 'Diciembre', ingresos: 3843, egresos: 348133 },
];

/* Periodo a analizar */

//var periodoElegido = prompt("Ingrese el período a analizar: ");
var periodoElegido = 'MES A UTILIZAR PARA EL ANÁLISIS';
/*Acá no me funcionaba con el prompt, pero si me funciona si pongo un mes manualmente*/

for (var i = 0; i < datosAnuales.length; i++) {

    var periodo = datosAnuales[i].periodo;
    var ingresos = datosAnuales[i].ingresos;
    var egresos = datosAnuales[i].egresos;

    if (periodoElegido == periodo) {

        var balancePeriodo = ingresos - egresos;

        if (balancePeriodo < 0) {
            console.log("El balance del periodo analizado genero pérdidas para la empresa")
        } else {
            console.log("El balance del periodo analizado genero ganancias para la empresa")
        }

    }

}