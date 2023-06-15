function calcularPresupuesto() {

    var ingresos = parseFloat(document.getElementById("ingresos").value);

    /* Primer Categoría */
    var categoria1 = document.getElementById("categoria-1").value;
    var porcentaje1 = parseFloat(document.getElementById("porcentaje-1").value);
    var cantidad1 = ingresos * (porcentaje1 / 100);

    /* Segunda Categoría */
    var categoria2 = document.getElementById("categoria-2").value;
    var porcentaje2 = parseFloat(document.getElementById("porcentaje-2").value);
    var cantidad2 = ingresos * (porcentaje2 / 100);

    /* Tercer Categoría */
    var categoria3 = document.getElementById("categoria-3").value;
    var porcentaje3 = parseFloat(document.getElementById("porcentaje-3").value);
    var cantidad3 = ingresos * (porcentaje3 / 100);

    document.getElementById("resultado-1").textContent = "Categoría 1 (" + categoria1 + "): $" + cantidad1.toFixed(2);
    document.getElementById("resultado-2").textContent = "Categoría 2 (" + categoria2 + "): $" + cantidad2.toFixed(2);
    document.getElementById("resultado-3").textContent = "Categoría 3 (" + categoria3 + "): $" + cantidad3.toFixed(2);

}